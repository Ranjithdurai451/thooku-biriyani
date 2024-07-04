import { ID, Query } from "appwrite"
import { account, appwriteConfig, databases, } from "../config"

export async function createUser({ email, username }: { email: string, username: string }) {
    try {
        const profileImg = `https://ui-avatars.com/api/?name=${username}&background=random&length=1`
        const user = await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.userCollectionId, ID.unique(), {
            email,
            username,
            profileImg
        })
        if (!user) throw new Error('Could not create user')
        return user;

    } catch (error) {
        return null;

    }
}

export async function findUser({ email }: { email: string }) {

    try {
        const user = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.userCollectionId, [Query.equal('email', email)])

        if (!user.documents[0]) throw new Error('Could not find user')
        return user.documents[0];
    } catch (error) {
        return null;

    }
}

export async function signUp({ email, username, password }: { email: string, username: string, password: string }) {
    try {
        const acc = await account.create(
            username,
            email,
            password
        );

        if (!acc) throw new Error("Could not create account");
        const session = await account.createEmailPasswordSession(
            email,
            password
        );
        createUser({ email, username })

        if (!session) throw new Error("Could not create session");

        return session;


    } catch (error: any) {
        return null;
    }

}

export async function login({ email, password }: { email: string, password: string }) {
    try {
        const session = await account.createEmailPasswordSession(
            email,
            password
        );
        if (!session) throw new Error("Could not create session");
        return session;
    } catch (error: any) {
        return null;
    }

}

export async function getUserState() {
    try {
        const user = await account.get();

        if (!user) throw new Error("Could not get user");
        return user;

    } catch (error: any) {
        return null;
    }
}


export async function logout() {
    try {
        const user = await account.deleteSession("current");
        console.log("user", user)
    } catch (error: any) {
        return null;
    }
}