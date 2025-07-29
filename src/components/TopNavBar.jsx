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

import github_logo from '../assets/img/github-mark.svg'
import linkedIn_logo from '../assets/img/LI-In-Bug.png'

import { ContactHeading } from "./style"

function TopNavBar ({ isHomepage }) {
    const { getWindowSize } = useContext(AppContext)

    return (
        <div className='relative flex h-12 mx-8 mt-4 mb-8 rounded-xs'>
            <div className='rounded-sm bg-stone-100 shadow-md shadow-sky-500/40 p-1'>
                <Link to="" className='content-center' onClick={() => { if (isHomepage) window.location.reload() }}>
                    <HomeIcon className='p-1 text-black h-full hover:scale-115' />
                </Link>
            </div>

            <div className='flex-1' />

            <ContactHeading />
        </div>
    )
}

export default TopNavBar