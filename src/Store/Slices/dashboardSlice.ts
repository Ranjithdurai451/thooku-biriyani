import { orderType } from "@/app/dashboard/orders/page";
import { createSlice } from "@reduxjs/toolkit";
const initialState: {
    selectedOrder: orderType
    ordersCount: number
} = {
    selectedOrder: {
        id: '',
        status: '',
        date: '',
        cartItems: [],
        totalItems: 0,
        totalAmount: 0,
        phoneNumber: 0,
        address: '',
        name: '',
        email: '',
        profileImg: '',
        role: ''
    },
    ordersCount: 0

}
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: initialState,

    reducers: {

        setSelectedOrder(state, action) {
            state.selectedOrder = action.payload;
        },
        setOrderCount(state, action) {
            state.ordersCount = action.payload
        }

    },
});



export default dashboardSlice.reducer;
export const { setSelectedOrder, setOrderCount } = dashboardSlice.actions;