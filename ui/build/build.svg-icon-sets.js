const path = require('path')
const fs = require('fs')

const buildUtils = require('./build.utils')

function resolve (_path) {
  return path.resolve(__dirname, '..', _path)
}

const svgIconSetBanner = setName => `
/*
 * Do not edit this file. It is automatically generated
 * from its webfont counterpart (same filename without "svg-" prefix).
 * Edit that file instead (${setName}.js).
 */
`

// generic conversion
const convert = str => str.replace(/(-\w)/g, m => m[1].toUpperCase())
const materialConvert = (str, old, prefix) => {
  if (old !== '') {
    str = str.substr(old.length)
  }
  return (prefix + str).replace(/(_\w)/g, m => m[1].toUpperCase())
}

const iconTypes = [
  {
    name: 'material-icons-outlined',
    regex: /^o_/,
    convert: str => materialConvert(str, 'o_', 'outlined_')
  },
  {
    name: 'material-icons-round',
    regex: /^r_/,
    convert: str => materialConvert(str, 'r_', 'round_')
  },
  {
    name: 'material-icons-sharp',
    regex: /^s_/,
    convert: str => materialConvert(str, 's_', 'sharp_')
  },
  {
    name: 'mdi-v5',
    regex: /^mdi-/,
    convert
  },
  {
    name: 'ionicons-v4',
    regex: /^ion-/,
    convert: str => convert(
      /ion-(md|ios)-/.test(str) === true
        ? str
        : str.replace(/ion-/, 'ion-md-')
    )
  },
  {
    name: 'fontawesome-v5',
    regex: /^fa[brs] fa-/,
    convert: str => convert(str.replace(' fa-', '-'))
  },
  {
    name: 'eva-icons',
    regex: /^eva-/,
    convert
  },
  {
    name: 'themify',
    regex: /^ti-/,
    convert
  },
  {
    name: 'line-awesome',
    regex: /^la[brs] la-/,
    convert: str => convert(
      (str.startsWith('las la-') === true ? str + '-solid' : str)
        .replace(/^la[brs] la-/, 'la-')
    )
  },
  // must be last as it's a catch-all
  {
    name: 'material-icons',
    regex: /./,
    convert: str => materialConvert(str, '', 'mat_')
  }
]

function convertWebfont (name) {
  const type = iconTypes.find(type => type.regex.test(name)) || iconTypes[0]

  return {
    importName: type.name,
    variableName: type.convert(name)
  }
}

function toObject (arr) {
  const obj = {}
  arr.forEach(item => {
    obj[item] = []
  })
  return obj
}

const iconNames = iconTypes.map(type => type.name)

const splitDelimiter = 'export default {'

function splitContent (str) {
  const content = str.split(splitDelimiter)

  return {
    outsideOfExport: content[0],
    insideOfExport: splitDelimiter + content[1]
  }
}

module.exports.generate = function () {
  return Promise.all(
    iconTypes.map(type => {
      const original = fs.readFileSync(resolve(`icon-set/${type.name}.js`), 'utf-8')
      const { outsideOfExport, insideOfExport } = splitContent(original)

      const importList = toObject(iconNames)

      const contentString = insideOfExport
        .replace(/name: '(.+)'/, `name: ""`)
        .replace(/'(.+)'/g, m => {
          const { importName, variableName } = convertWebfont(m.substring(1, m.length - 1))
          if (!importList[importName].includes(variableName)) {
            importList[importName].push(variableName)
          }
          return variableName
        })
        .replace(/name: ""/, `name: 'svg-${type.name}'`)

      const importString = Object.keys(importList)
        .filter(listName => importList[listName].length > 0)
        .map(listName => `import {\n  ` + importList[listName].join(',\n  ') + `\n} from '@efuzy/extras/${listName}'`)
        .join('\n\n')

      const content = [
        svgIconSetBanner(type.name),
        importString,
        outsideOfExport,
        contentString
      ].filter(str => str).join('\n\n')

      const iconFile = resolve(`icon-set/svg-${type.name}.js`)

      let oldContent = ''

      try {
        oldContent = fs.readFileSync(iconFile, 'utf-8')
      }
      catch (e) {}

      return content.split(/[\n\r]+/).join('\n') !== oldContent.split(/[\n\r]+/).join('\n')
        ? buildUtils.writeFile(iconFile, content, 'utf-8')
        : Promise.resolve()
    })
  )
}
