import { configureStore } from "@reduxjs/toolkit";

import menuSlice from "./Slices/menuSlice";
import cartSlice from "./Slices/cartSlice";
import loaderSlice from "./Slices/LoadersSlice";


export const store = configureStore({
    reducer: {
        menu: menuSlice,
        cart: cartSlice,
        loader: loaderSlice
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;