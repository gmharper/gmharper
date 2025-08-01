
"use-client"

// IMPORTS
import { useContext, useEffect, useRef, useState } from "react"
import { Link } from "react-router"
import { motion, useInView } from "framer-motion"

import { AppContext } from "../App"

// COMPONENTS
import {
    HomeIcon, StopCircleIcon
} from "@heroicons/react/24/solid"

import { ContactHeading } from "./style"

import crt_effect from "../assets/img/crt-effect.jpg"

// STYLING
let scanner_indicator = 'items-center content-center justify-center h-12 bg-linear-to-r from-zinc-200/80 to-white contrast-150 drop-shadow-xl drop-shadow-yellow-500/40 rounded-xl border-4 border-double border-black px-2'

const NameIndicator = ({ text="", playAnimations }) => {
    let textArray = text.split("")
    let ref = useRef(null)

    let isInView = useInView(ref)

    return (
        <div className='flex flex-row flex-shrink drop-shadow-sm drop-shadow-white/60'>
            <motion.p
                ref={ref}
                style={{ color: 'black' }}
                className='text-left font-pixel_operator h-full flex-shrink justify-left content-left'
                variants={{
                    visible: { opacity: 1 }, hidden: { opacity: 0 }
                }}
                transition={{ duration: 0, staggerChildren: 0.05 }}
                initial={{ opacity: 0 }}
                animate={"visible"}
            >
                { textArray.map((char, index) => {
                    return <motion.span
                        key={char+index}
                        className='text-3xl text-left font-pixel_operator h-full'
                        transition={{ duration: 0 }}
                        initial={{ opacity: 0 }}
                        variants={{ 
                            visible: { opacity: 1 }, hidden: { opacity: 0 }
                        }}
                        animate={{ opacity: 1 }}
                    >
                        {char}
                    </motion.span >
                }) }
                <span className='text-left font-pixel_operator animate-cursor-blink'>.</span>
            </motion.p >
        </div>
    )
}

function TopNavBar ({ isHomepage }) {
    const { playAnimations, getWindowSize } = useContext(AppContext)

    const [active, setActive] = useState('name')

    const ref = useRef(null)

    return (
        <div className='relative flex flex-row h-12 sm:mx-8 mt-4 rounded-xs mb-4'>
            <div className='rounded-sm bg-stone-100 shadow-md shadow-sky-200/40 p-1 mr-4'>
                <Link to="/home" className='content-center' >
                    <HomeIcon className='p-1 text-black h-full hover:scale-115' />
                </Link>
            </div>

            <div className={'flex flex-row overflow-hidden ' +scanner_indicator} >
                <NameIndicator text={getWindowSize()[0] <=768 ? "GEORGE HARPER" : "GEORGE HARPER | FULL-STACK DEVELOPER "} playAnimations={playAnimations}/>
                <img src={crt_effect} className='absolute scale-100 contrast-50 opacity-30'/>
            </div>

            <div className='flex-1' />

            <ContactHeading />
        </div>
    )
}

export default TopNavBar