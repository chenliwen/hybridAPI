import { invokeMethod } from '../util'

export default {
  get(id) {
    return invokeMethod('getCartItems', id)
  },

  reduce(options = {}) {
    return invokeMethod('reduceCartItem', options)
  },

  remove(options = {}) {
    return invokeMethod('removeCartItem', options)
  },

  add(options = {}) {
    return invokeMethod('addCartItem', options)
  },

  clear(id) {
    return invokeMethod('clearCart', id)
  },
}
