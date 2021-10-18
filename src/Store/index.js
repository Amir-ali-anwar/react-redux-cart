import cartItems from "../cart-items";
import { createStore } from "redux";
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
};
const reducer=(state=initialStore,action)=>{
	
	if (action.type === 'DECREASE') {
		console.log('decrease')
	let tempCart = state.cart.map(cartItem => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }
	if (action.type === 'INCREASE') {
		console.log('increase')
		// console.log(action.payload.id)
    let tempCart = state.cart.map(cartItem => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
		if (action.type ==='REMOVE') {
			console.log('remove')
			return {
				...state,
				cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
			};
			}
			if (action.type === 'EMPTY_CART') {
				console.log('emoty')
				return { ...state, cart: [] };
			}
	return state
}
const store=createStore(reducer);

export default store