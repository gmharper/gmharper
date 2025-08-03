"use client"

// IMPORTS
import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../../App"

import { Link } from "react-router"
import { motion, useInView } from "framer-motion"

import github_logo from '../../assets/img/github-mark.svg'
import linkedIn_logo from '../../assets/img/linkedIn-logo.png'

import { UFOIcon } from "../../assets/icons.jsx"

import UFO from "../../assets/img/tabler-ufo-icon.svg"

// COMPONENTS
import { ArrowTurnDownRightIcon, ChevronLeftIcon, ChevronRightIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"

function ContactHeading () {
    const { getWindowSize } = useContext(AppContext)

    const [open, setOpen] = useState(false)
    const [opened, setOpened] = useState(false)

    let ref = useRef(null)
    let isInView = useInView(ref)

    const OpenMail = ({ subject='', body='', children }) => {
        return (
            <a href={`mailto:georgemichaelharper@gmail.com?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>
                {children}
            </a>
        )
    }

    const Icons = () => {
        return (
            <div className='flex flex-row'>
                <OpenMail 
                    children={
                        <div className='flex hover:scale-110 mr-2 w-12 h-12 text-white bg-red-500 rounded-full overflow-hidden p-1'>
                            <EnvelopeIcon className='w-full h-full text-white'/>
                        </div>
                    }
                />

                <a 
                    href='https://github.com/gmharper' 
                    className='flex '
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='flex hover:scale-110 mr-2 w-12 h-12 text-white'>           
                        <img src={github_logo} className=''/>
                    </div>
                </a>

                <a 
                    href='https://www.linkedin.com/in/george-harper-4a6132357' 
                    className='flex '
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='flex hover:scale-110 w-12 h-12 aspect-1/1 rounded-full bg-white overflow-hidden'>           
                        <img src={linkedIn_logo} className=''/>
                    </div>
                </a>
            </div>
        )
    }

    const Contacts = () => {
        return (
            <div className='flex flex-row overflow-hidden'>
                <div className='flex flex-col mr-2'>
                    <div className='flex flex-row bg-zinc-100 rounded-sm px-1 items-center animate-grow'>
                        <img src={UFO} className='h-6'/>
                        <p className='font-bold text-sm text-black whitespace-nowrap overflow-hidden ml-1'>{open && 'MAKE CONTACT'}</p>
                    </div>

                    <div className='flex flex-row w-full'>
                        <div className='flex-1' />
                        <ArrowTurnDownRightIcon className='w-6 font-bold text-black' />
                    </div>
                </div>

                {/* <div className='flex flex-col mr-2' >
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
                </div> */}
            </div>
        )
    }

    return (
        <div className='absolute z-20 -top-1 right-0 flex flex-row h-14 rounded-xs p-1 bg-white'
            onMouseLeave={() => {
                setOpen(false)
            }}
        >  
            <>
                <div className='h-full items-center content-center border-r-1 border-zinc-500 mr-2'
                    onMouseEnter={() => {
                        setOpen(true) 
                        setOpened(true)}}
                >
                { open ? 
                    <ChevronRightIcon className='h-6 font-bold text-black aspect-square'/> :
                    <ChevronLeftIcon className='h-6 font-bold text-black aspect-square'/>
                }
                </div>
                <motion.div className='relative flex flex-row rounded-xs bg-white'
                    initial = {{ width: 0 }}
                    animate = {{ width: open ? 170 : 0 }}
                    transition = {{ duration: 0.3 }}
                >
                { open ? 
                    <Contacts />
                    :
                    <div className='z-40 absolute w-3 h-3 bg-sky-400 -top-2 -left-10.5 rounded-full' />
                }
                </motion.div>
            </> 
        <Icons />     
        </div>

        
    )
}

export default ContactHeading