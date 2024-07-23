"use server";
import { cartSliceType } from "@/Utils/types";
import { ID } from "appwrite";
import { revalidatePath } from "next/cache";
import { databases, appwriteConfig } from "../config";

export async function placeOrder({
    cart,
    phoneNumber,
    address,
    userId
}: {
    cart: cartSliceType,
    phoneNumber: number,
    address: string,
    userId: string
}) {


    try {
        const order = await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.orderCollectionId, ID.unique(), {
            cartItems: JSON.stringify(cart.cartItems)
            ,
            totalItems: cart.totalItems,
            totalAmount: cart.totalAmount,
            phoneNumber,
            address,
            user: userId
        })


        revalidatePath('/dashboard/orders');

        if (!order) throw new Error("Could not create order");
        return order;
    } catch (error: any) {
        console.log(error)
        return null;
    }

}