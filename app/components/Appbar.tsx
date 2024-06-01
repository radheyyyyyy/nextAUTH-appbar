"use client"
import {signIn, signOut, useSession} from "next-auth/react";
import{useState} from "react";

export default function Appbar(){
    let x="Sign in"
    const session=useSession();
    if(session.status==='authenticated'){
        console.log(session)
        x="Sign out"
    }
    async function fn(x:any){
        if(x==="Sign in"){
            await signIn();
        }
        else await signOut();
    }
    return(
        <div className='py-5 bg-gray-200 border-b-2 border-black flex justify-between'>
            <div className='ml-5 font-bold'>devxcode</div>
            <div>
                <button className='mr-10 hover:text-red-400 font-bold'  onClick={
                    async ()=>{await fn(x)}
                }
                >{x}</button>
            </div>
        </div>
    )
}