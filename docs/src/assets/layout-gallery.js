const list = [
  { name: 'Youtube', path: 'youtube' },
  { name: 'Google Play', path: 'google-play' },
  { name: 'Github', path: 'github' },
  { name: 'Google Photos', path: 'google-photos' },
  { name: 'Google News', path: 'google-news' },
  { name: 'Whatsapp', path: 'whatsapp' },
  { name: 'Efuzy Classic', path: 'efuzy-classic' },
  { name: 'Efuzy Classic (Dark)', path: 'efuzy-classic-dark' }
]

export default list.map(layout => ({
  ...layout,
  screenshot: `https://cdn.efuzy.dev/img/layout-gallery/screenshot-${layout.path}.png`,
  demoLink: `/layout/gallery/${layout.path}`,
  sourceLink: `https://github.com/efuzy/efuzy/blob/dev/docs/src/layouts/gallery/${layout.path}.vue`
}))
