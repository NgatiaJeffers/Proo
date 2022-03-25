import { ActionTypes } from "./Types";

export const CartReducer = (storeData, action) => {
    let newStore = { cart: [], cartItems: 0, cartTotal: 0, ...storeData };
    switch(action.type) {
        case ActionTypes.CART_ADD:
            const product = action.payload.product;
            const quantity = action.payload.quantity;

            let existing = newStore.cart.find(item => item.product.id === product.id);
            if (existing) {
                existing.quantity += quantity;
            } else {
                newStore.cart = [...newStore.cart, action.payload];
            }
            newStore.cartItems += quantity;
            newStore.cartTotal += product.price * quantity;
            return newStore;
        
        case ActionTypes.CART_UPDATE:
            newStore.cart = newStore.cart.map(item => {
                if (item.product.id === action.payload.product.id) {
                    const diff = action.payload.quantity - item.quantity;
                    newStore.cartItems += diff;
                    newStore.cartTotal += (diff * item.product.price);
                    return action.payload;
                } else {
                    return item;
                }
            });
            return newStore;

        case ActionTypes.CART_REMOVE:
            let selection = newStore.cart.find(item => item.product.id === action.payload.product.id);
            newStore.cartItems -= selection.quantity;
            newStore.cartTotal -= (selection.quantity * selection.product.price);
            newStore.cart = newStore.cart.filter(item => item !== selection);
            return newStore;
        
        case ActionTypes.CART_CLEAR:
            return { cart: [], cartItems: 0, cartTotal: 0, ...storeData };
        
        default:
            return storeData || { cart: [], cartItems: 0, cartTotal: 0 };
        }
}