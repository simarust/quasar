import Platform from './platform'

export default {
  __history: [],
  add: () => {},
  remove: () => {},

  __installed: false,
  install () {
    if (this.__installed || !Platform.is.cordova) {
      return
    }

    this.__installed = true
    this.add = definition => {
      this.__history.push(definition)
    }
    this.remove = definition => {
      const index = this.__history.indexOf(definition)
      if (index >= 0) {
        this.__hist.splice(index, 1)
      }
    }

    document.addEventListener('deviceready', () => {
      document.addEventListener('backbutton', () => {
        if (this.history.length) {
          const fn = this.history.pop().handler
          fn()
        }
        else {
          window.history.back()
        }
      }, false)
    })
  }
}
