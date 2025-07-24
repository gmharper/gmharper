// IMPORTS
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router"

import { AppContext } from "../App"

import {
    ArrowTurnDownRightIcon,
    ArrowDownRightIcon, 
    HomeIcon,
    EnvelopeIcon,
    PhoneIcon
} from "@heroicons/react/24/solid"

import github_logo from '../assets/icons/github-mark.png'
import linkedIn_logo from '../assets/icons/LI-In-Bug.png'

function TopNavBar ({ isHomepage }) {
    const { getWindowSize } = useContext(AppContext)

    return (
        <div className='relative flex h-12 mx-8 mt-4 mb-8 rounded-xs'>
            <div className='rounded-sm bg-stone-100 shadow-md shadow-sky-500/40 p-1'>
                <Link to="/" className='content-center' onClick={() => { if (isHomepage) window.location.reload() }}>
                    <HomeIcon className='p-1 text-black h-full hover:scale-115' />
                </Link>
            </div>

            <div className='flex-1' />

            <div className='flex flex-row h-16 rounded-sm content-center items-center py-1 px-2 bg-stone-100 overflow-hidden shadow-md shadow-sky-500/40'>
                { (getWindowSize()[0] >= 1526) ?
                    <div className='flex flex-col mr-2'>
                        <p className='font-bold text-black'>CONTACT</p>
                        <ArrowTurnDownRightIcon className='w-6 font-bold text-black' />
                    </div> : <></> 
                }

                { (getWindowSize()[0] >= 1024) ?
                    <div className='z-10 flex flex-col h-full rounded-xl justify-center content-center mr-4'>
                        <div className='flex flex-row items-center'>
                            <EnvelopeIcon className='w-4 h-full text-black mr-1' />
                            <p className='font-bold text-left text-black'>georgemichaelharper@gmail.com</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <PhoneIcon className='w-4 text-black mr-1' /> 
                            <p className='font-bold text-right text-black'>07834738781</p>
                        </div>
                    </div> : <></>
                }

                <div className='flex flex-row'>
                    <Link to='https://github.com/gmharper' className='flex'>
                        <div
                            className='flex hover:scale-110 mr-2 w-12 h-12 text-white'
                        >           
                            <img src={github_logo} className=''/>
                        </div>
                    </Link>

                    <Link to='https://www.linkedin.com/in/george-harper-4a6132357' className='flex'>
                        <div
                            className='flex hover:scale-110 w-16 h-12 aspect-1/1'
                        >           
                            <img src={linkedIn_logo} className=''/>
                        </div>
                    </Link>
                </div>
                <div className='z-15 absolute w-3 h-3 bg-sky-500 -top-1 -right-1 rounded-full' />
                {/* <div className='absolute bg-linear-to-r from-violet-700 via-lime-300 to-violet-700 w-100 h-90 origin-center -top-35 -left-8 animate-border-rotate'/> */}
            </div>
        </div>
    )
}

export default TopNavBar