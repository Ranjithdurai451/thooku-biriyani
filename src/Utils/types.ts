export interface MenuItemType {
    id: string;
    category?: string;
    name?: string;
    price?: number;
    original_price?: number;
    offer?: number;
    serves?: number;
    items?: string[];
    availability?: string;
    image_url?: string;
    description?: string;
};

export interface cartItemType extends MenuItemType {
    quantity: number
}
export type cartSliceType = {
    cartItems: cartItemType[];
    totalItems: number;
    totalAmount: number;
    isCartModalOpen: boolean
}