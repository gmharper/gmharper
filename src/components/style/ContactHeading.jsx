"use client"

// IMPORTS
import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../../App"

import { Link } from "react-router"
import { motion, useInView } from "framer-motion"

import github_logo from '../../assets/img/github-mark.svg'
import linkedIn_logo from '../../assets/img/LI-In-Bug.png'

// COMPONENTS
import { ArrowTurnDownRightIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"

function ContactHeading () {
    const { getWindowSize } = useContext(AppContext)

    const [open, setOpen] = useState(false)
    const [opened, setOpened] = useState(false)

    let ref = useRef(null)
    let isInView = useInView(ref)

    const Icons = () => {
        return (
            <div className='flex flex-row'>
                <Link to='https://github.com/gmharper' className='flex'>
                    <div className='flex hover:scale-110 mr-2 w-12 h-12 text-white'>           
                        <img src={github_logo} className=''/>
                    </div>
                </Link>

                <Link to='https://www.linkedin.com/in/george-harper-4a6132357' className='flex'>
                    <div className='flex hover:scale-110 w-16 h-12 aspect-1/1'>           
                        <img src={linkedIn_logo} className=''/>
                    </div>
                </Link>
            </div>
        )
    }

    const Contacts = () => {
        return (
            <div className='flex flex-row'>
                <div className='flex flex-col mr-2'>
                    <p className='font-bold text-black'>CONTACT</p>
                    <ArrowTurnDownRightIcon className='w-6 font-bold text-black' />
                </div>

                <div className='flex flex-col mr-2' >
                    <div className='flex flex-row items-center'>
                        <EnvelopeIcon className='w-4 h-full text-black mr-1' />
                        <p className='font-bold text-left text-black'>
                            georgemichaelharper@gmail.com
                        </p>
                    </div>

                    <div className='flex flex-row items-center'>
                        <PhoneIcon className='w-4 h-full text-black mr-1' />
                        <p className='font-bold text-left text-black' >
                            07834738781
                        </p>
                    </div>
                </div>

                <div className='flex-1' />

                <Icons />
            </div>
        )
    }

    return (
        <>
            { getWindowSize()[0] >= 1024 ? 
                <div className='relative flex flex-row h-16 w-125 rounded-xs p-2 bg-white overflow-hidden' >
                    <Contacts />    
                </div>
                : 
                <motion.div className='relative flex flex-row h-16 rounded-xs p-2 bg-white'
                    onMouseEnter={() => {
                        setOpen(true) 
                        setOpened(true)}}
                    onMouseLeave={() => {
                        setOpen(false)
                    }}
                    initial = {{ width: 130 }}
                    animate = {{ width: open ? 500 : 130 }}
                    transition = {{ duration: 0.3, delayChildren: 30 }}
                >
                { open ? 
                    <Contacts /> : 
                    <div className='flex flex-row relative'>
                        <div className='z-40 absolute w-3 h-3 bg-sky-400 -top-3 -right-2 rounded-full' />
                        <Icons />
                    </div>
                }
                </motion.div>
            }
        </>

        
    )
}

export default ContactHeading