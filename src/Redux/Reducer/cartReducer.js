import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../Constant"

const int = {
  add_cart: [],
}

const cartReducer = (state = int, { payload, type }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        add_cart: [...state.add_cart, payload]
      }
      break;
    case REMOVE_FROM_CART:
      const d = state.add_cart.filter(item => item.id !== payload)
      return {
        ...state,
        add_cart: { ...state.add_cart, d }
      }
    case CLEAR_CART:
      return {
        ...state,
        add_cart: []

      }
    default:
      return state;
      break;
  }
}


export default cartReducer;