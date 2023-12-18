import { capitalizeFirstLetter } from './utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('$root is required')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)

      if (!this[method]) {
        throw new Error(`Method ${method} not found in ${this.name} Component`)
      }

      this.method = this[method].bind(this)

      this.$root.on(listener, this[method].bind(this))
    })
  }

  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalizeFirstLetter(eventName)
}
