// Hooks added here have a bridge allowing communication between the BEX Content Script and the Efuzy Application.
// More info: https://efuzy.dev/efuzy-cli/developing-browser-extensions/content-hooks

export default function attachContentHooks (/* bridge */) {
  // Hook into the bridge to listen for events sent from the client BEX.
  /*
  bridge.on('some.event', event => {
    if (event.data.yourProp) {
      // Access a DOM element from here.
      // Document in this instance is the underlying website the contentScript runs on
      const el = document.getElementById('some-id')
      if (el) {
        el.value = 'Efuzy Rocks!'
      }
    }
  })
  */
}
