import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { petsShopApi } from './api/api';

 
export const authConfig = {
  trustHost:true,
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register',
  },
  

  callbacks:{
    authorized({ auth, request: { nextUrl } }) {
        
        const isLoggedIn = !!auth?.user;
        const isOnCheckout = ['/checkout',].some(route => nextUrl.pathname.startsWith(route));
        const isDashboard = ['/dashboard',].some(route => nextUrl.pathname.startsWith(route));
        const isAdmin = auth?.user?.name === 'jhoni' || auth?.user?.name === 'valeria garcia' || auth?.user?.name === 'nicole garcia';

        if (isOnCheckout) {
          if (isLoggedIn) return true;
          return false; 
        }

        if (isDashboard) {
          if (isLoggedIn && isAdmin) return true;
          return Response.redirect(new URL('/', nextUrl)); 
        }

        return true;
      },

    jwt({token , user}) {
        if (user) {
           token.data = user; 
        }
        return token;
    },

    session({session , token, user}) {
        
        session.user = token.data;
        
        return session;
    },
  },


  
  providers: [
    Credentials({
        async authorize(credentials) {

          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);
   
          if (!parsedCredentials.success) return null;

          const {email,password}= parsedCredentials.data;

          const {data} = await petsShopApi.post('/auth',{email,password});

          if(!data) return null;
          
          return data

        },
      }),
  ], // Add providers with an empty array for now
} 


export const {signIn,signOut,auth , handlers} = NextAuth(authConfig)
