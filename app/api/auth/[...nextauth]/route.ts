import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const handler=NextAuth({
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                email:{label:"Email",placeholder:"xyz@gmail.com",type:"email"},
                password:{label:"Password",type:"password"},
            },
            async authorize(credentials){
                if(credentials?.email){
                return {id:"1"}}
                else return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })

    ]
})

export {handler as GET,handler as POST}