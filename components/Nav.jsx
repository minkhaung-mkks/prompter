"use client";

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
    let isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const setupProviders = async () =>{
        const res = await getProviders();
        setProviders(res)
    }
    useEffect(()=>{
        setupProviders();
    },[])
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
        <Link className='flex gap-2 flex-center' href='/'>
            <Image
                src="/assets/images/logo.svg"
                width={30}
                height={30}
                alt='Prompt Paradise Logo'
            />
            <p className='logo_text'>
                Prompt Paradise
            </p>
        </Link>

        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
            {isUserLoggedIn ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link className='black_btn' href='/create-prompt'>
                        Create Post
                    </Link>
                    <button type='button' onClick={signOut} className='outline_btn'>
                        Sign Out
                    </button>
                    <Link href='/profile'>
                        <Image
                            src='assets/images/logo.svg'
                            width={37}
                            height={37}
                            alt='Profile Picture'
                            className='rounded-full'
                        />
                    </Link>
                </div>
            )
            :(
                <>
                    {providers && Object.values(providers).map((provider) =>(
                        <button 
                            type='button' 
                            onClick={()=>signIn(provider?.id)}
                            key={provide?.name}
                            className='black_btn'
                        >
                            Sign In
                        </button>
                    )   
                    )}
                </>
            )
            }
        </div>
        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
            {isUserLoggedIn ? ( 
                <div className='flex'>
                    <Image
                        src='assets/images/logo.svg'
                        width={37}
                        height={37}
                        alt='Profile Picture'
                        className='rounded-full'
                        onClick={()=>setToggleDropdown((prev)=>!prev)}
                    />
                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link
                                href='/profile'
                                className='dropdown_link'
                                onClick={()=>setToggleDropdown(false)}
                            >
                                My Profile
                            </Link>
                            <Link
                                href='/create-prompt'
                                className='dropdown_link'
                                onClick={()=>setToggleDropdown(false)}
                            >
                                Create Post
                            </Link>
                            <button
                                type='button'
                                onClick={()=>{
                                    setToggleDropdown(false)
                                    signOut()
                                }}
                                className='mt-5 w-full black_btn'
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div> 
            ): 
            ( 
                <>
                    {providers && Object.values(providers).map((provider) =>(
                        <button 
                            type='button' 
                            onClick={()=>signIn(provider?.id)}
                            key={provide?.name}
                            className='black_btn'
                        >
                            Sign In
                        </button>
                    )   
                    )}
                </>
            )}

        </div>
    </nav>
  )
}

export default Nav