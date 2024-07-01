import { getDocs } from "firebase/firestore";
import { MenuCollRef } from '../config';

export async function fetchMenuItems() {
    const res = await getDocs(MenuCollRef);
    const menuItems = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return menuItems;
}