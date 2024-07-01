import { createSlice } from "@reduxjs/toolkit";
import { cartSliceType } from "../../Utils/types";

const initialState: cartSliceType = {
    cartItems: [],
    totalItems: 0,
    totalAmount: 0,
    isCartModalOpen: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState, reducers: {
        addItem(state, action) {

            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex != -1) {
                if (action.payload.quantity)
                    state.cartItems[itemIndex].quantity += action.payload.quantity;
                else
                    state.cartItems[itemIndex].quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }

            state.totalAmount = state.cartItems.reduce((total, item) => total + (item?.price || 0) * item.quantity, 0);
            state.totalItems = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        },
        removeItem(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[itemIndex].quantity == 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            } else {
                state.cartItems[itemIndex].quantity -= 1;
            }

            state.totalAmount = state.cartItems.reduce((total, item) => total + (item?.price || 0) * item.quantity, 0);
            state.totalItems = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        },
        deleteItem(state, action) {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.totalAmount = state.cartItems.reduce((total, item) => total + (item?.price || 0) * item.quantity, 0);
            state.totalItems = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        },
        clearCart(state) {
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalItems = 0;
        },
        setCart(state, action) {
            state.cartItems = action.payload.cartItems;
            state.totalAmount = action.payload.totalAmount;
            state.totalItems = action.payload.totalItems;

        },
        toggleCartModal(state) {
            state.isCartModalOpen = !state.isCartModalOpen;
        }

    }
})


export default cartSlice.reducer;
export const { addItem, removeItem, clearCart, toggleCartModal, deleteItem, setCart } = cartSlice.actions