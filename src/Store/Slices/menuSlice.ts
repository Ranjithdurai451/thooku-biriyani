import { createSlice } from "@reduxjs/toolkit";
import { MenuItemType } from "../../Utils/types";


const initialState: {
    menuItems: MenuItemType[]
} = {
    menuItems: [],
};


const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenuItems: (state, action) => {
            state.menuItems = action.payload;
        },
    },
});
export const { setMenuItems } = menuSlice.actions;
export default menuSlice.reducer