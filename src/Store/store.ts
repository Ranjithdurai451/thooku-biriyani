import { configureStore } from "@reduxjs/toolkit";

import menuSlice from "./Slices/menuSlice";
import cartSlice from "./Slices/cartSlice";
import userSlice from "./Slices/userSlice";
import dashboardSlice from "./Slices/dashboardSlice";



export const store = configureStore({
    reducer: {
        menu: menuSlice,
        cart: cartSlice,
        user: userSlice,
        dashboard: dashboardSlice

    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;