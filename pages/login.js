import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components";
import { useRouter } from 'next/router';
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Login = () => {

    const router = useRouter();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push("/")
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Wrapper>
            <UberLogo src='Post.png' />
            <Title> Login to access your account </Title>
            <HeadImage src='login-image.png' />
            <SignInButton onClick={()=>signInWithPopup(auth, provider)}>
                Sign in with google
            </SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-gray-200 p-4 
`

const SignInButton = tw.button`
    bg-black text-white text-center py-4 mt-8 self-center w-full 
`

const UberLogo = tw.img`
    h-20 w-auto object-contain self-start
`

const Title = tw.div`
    text-5xl pt-4 text-gray-500 
`

const HeadImage = tw.img`
     object-contain w-full
`