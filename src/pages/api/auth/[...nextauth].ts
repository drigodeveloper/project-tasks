import nextAuth from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],

    secret: process.env.NEXTAUTH_URL as string
};

export default nextAuth(AuthOptions)