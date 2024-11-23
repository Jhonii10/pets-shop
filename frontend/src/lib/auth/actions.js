'use server';

import { petsShopApi } from "@/api/api";
import { signIn, signOut } from "@/auth.config";

export async function authenticate(prevState, formData) {


    try {
        await signIn('credentials', {
            email: formData.email,
            password: formData.password,
            redirect: false,
        });

        return 'Success';
    } catch (error) {
        return 'CredentialsSignin';
    }
}

export async function login(email, password) {
    try {
        await signIn('credentials', {
            email: email,
            password: password,
            redirect: false,
        });

        return {
            ok: true,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            ok: false,
        };
    }
}

export const logOut = async () => {
    await signOut();
};

export const registerUser = async (name , email , password) => {
    try {
        const {data} = await petsShopApi.post('/auth/new', {name , email , password});

        if(data){
            return {
                ok: true,
                message:'Usuario creado',
                data:data
            }
        }

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            message: 'no se pudo crear el usuario'
        } 
    }
}