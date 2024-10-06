import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import userSlice from "./Slices/userSlice";
import dashboardSlice from "./Slices/dashboardSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfigForCart = {
    key: 'cart',
    storage,
}

const persistConfigForUser = {
    key: 'user',
    storage,
}
const persistConfigForDashboard = {
    key: 'dashboard',
    storage,
}

const persistedReducerForCart = persistReducer(persistConfigForCart, cartSlice);
const persistedReducerForUser = persistReducer(persistConfigForUser, userSlice);

const persistedReducerForDashboard = persistReducer(persistConfigForDashboard, dashboardSlice);

export const store = configureStore({
    reducer: {
        cart: persistedReducerForCart,
        user: persistedReducerForUser,
        dashboard: persistedReducerForDashboard
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
