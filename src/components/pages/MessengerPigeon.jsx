"use client"
// IMPORTS
import { useContext, useState } from "react"
import { AppContext } from "../../App"
import { motion } from "framer-motion"

// COMPONENTS
import { BoxLabel, RevealText, IconsPanel, IconsPanelHoriz } from "../style"

import { 
    ArrowRightCircleIcon, ArrowsPointingOutIcon, 
    XMarkIcon 
} from "@heroicons/react/24/solid"

import mp_endpoints from "../../assets/img/mp-endpoints.png"
import mp_injection from "../../assets/img/mp-injection.png"
import nc_logo from "../../assets/img/nc-logo.png"

import { JavascriptIcon, ReactIcon, DotEnvIcon, ExpressJsIcon, JestIcon, PostgresqlIcon, SupabaseIcon, GithubIcon, AxiosIcon, DoveIcon } from "../../assets/icons"
import { Tooltip } from "react-tooltip"

let icon_styling = 'flex w-full h-12 '

const icons = [
    { id: 'javascript', name: 'JAVASCRIPT', component: <JavascriptIcon className={icon_styling}/> },
    { id: 'react', name: 'REACT', component: <ReactIcon className={icon_styling}/> },
    { id: 'express', name: 'EXPRESS JS ROUTING', component: <ExpressJsIcon className={icon_styling}/> },
    
]

const icons_2 = [
    { id: 'postgres', name: 'PostgreSQL', component: <PostgresqlIcon className={icon_styling}/> },
    { id: 'supabase', name: 'SUPABASE', component: <SupabaseIcon className={icon_styling}/> },
    { id: 'dotenv', name: 'DOT ENV', component: <DotEnvIcon className={icon_styling}/> },
    { id: 'axios', name: 'AXIOS', component: <AxiosIcon className={icon_styling}/> },
    { id: 'jest', name: 'JEST TDD', component: <JestIcon className={icon_styling}/> },
    { id: 'spacer'},
]


function MessengerPigeon () {
    const { getWindowSize } = useContext(AppContext)
    
    const [activeImage, setActiveImage] = useState('')
    
    const [showInjectionArrows, setShowInjectionArrows] = useState(false)
    const [showEndpointArrows, setShowEndpointArrows] = useState(false)
    const [showTestingArrows, setShowTestingArrows] = useState(false)

    const Image1 = () => {
        return (
            <div className='flex flex-col gap-1 rounded-xl min-w-65'>
                <BoxLabel text={'INJECTION PREVENTION'} width="min-w-65"/>
    
                <div className='relative flex z-10 h-80 min-w-100 rounded-sm overflow-hidden items-center justify-center cursor-pointer crt'
                        onMouseEnter={() => { setShowInjectionArrows(true) }}
                        onMouseLeave={() => { setShowInjectionArrows(false) }}
                        onClick={() => { setActiveImage(mp_injection) }}
                >
                    <img src={mp_injection} className='w-full h-full hover:blur-[1px]' />
                    { showInjectionArrows && <ArrowsPointingOutIcon className='z-20 absolute w-32 h-32 text-white/40 pointer-events-none' /> }
                </div>
            </div>
        )
    }
    
    const Image2 = () => {
        return (
            <div className='flex flex-col gap-1 rounded-xl min-w-65'>
                <BoxLabel text={'EXPRESS ROUTING & ENDPOINTS'} width="min-w-65"/>
    
                <div className='z-10 relative flex h-80 min-w-100 overflow-hidden rounded-sm items-center justify-center cursor-pointer crt'
                        onMouseEnter={() => { setShowEndpointArrows(true) }}
                        onMouseLeave={() => { setShowEndpointArrows(false) }}
                        onClick={() => { setActiveImage(mp_endpoints) }}
                >
                    <img src={mp_endpoints} className='w-full h-full hover:blur-[1px]' loading=""/>
                    { showEndpointArrows && <ArrowsPointingOutIcon className='z-20 absolute w-32 h-32 text-white/40 pointer-events-none' /> }
                </div>
            </div>
        )
    }

    // const Image3 = () => {
    //     return (
    //         <div className='flex flex-col gap-1 rounded-xl min-w-65'>
    //             <BoxLabel text={'ENDPOINT TESTING'} width="min-w-65"/>
    
    //             <div className='z-10 relative flex h-80 min-w-100 overflow-hidden rounded-sm items-center justify-center cursor-pointer crt'
    //                     onMouseEnter={() => { setShowTestingArrows(true) }}
    //                     onMouseLeave={() => { setShowTestingArrows(false) }}
    //                     onClick={() => { setActiveImage(mp_testing) }}
    //             >
    //                 <img src={mp_testing} className='w-full h-full hover:blur-[1px]' loading=""/>
    //                 { showTestingArrows && <ArrowsPointingOutIcon className='z-20 absolute w-32 h-32 text-white/40 pointer-events-none' /> }
    //             </div>
    //         </div>
    //     )        
    // }

    return (
        <div className={'relative flex flex-row items-center justify-center content-center mb-8'}>
            { activeImage &&
                <div className={'z-30 absolute top-3 min-h-200 min-w-100 rounded-sm outline-1 outline-zinc-400 drop-shadow-2xl drop-shadow-black/40 overflow-hidden' +(activeImage && 'backdrop-blur-lg')}>
                    <div className='absolute top-2 right-2 w-12 h-12 cursor-pointer bg-white outline-1 outline-zinc-300 drop-shadow-xs drop-shadow-black/30 rounded-sm p-2'
                    onClick={() => {setActiveImage(null)}}>
                        <XMarkIcon className='h-full text-black'/>
                    </div>
                    <img src={activeImage} className='h-210'/>
                </div>
            }
            {/* { getWindowSize()[0] >= 1536 ?
            <div className='z-10 flex flex-col gap-1'>
                <BoxLabel text={'WIREFRAMES'} />
                <img src={br_wireframes} className='h-200 rounded-sm'/>
            </div> : <></>
            } */}

            <div className='flex px-8 w-screen flex-col gap-2 items-center justify-center content-center bg-zinc-900/50 py-4 lg:px-4'>
                <div className='flex flex-row gap-2 lg:gap-8'>
                    <div className='relative z-10 flex flex-col gap-1 bg-zinc-800 min-w-160 w-160 rounded-sm overflow-hidden'>
                        <div className='absolute flex w-full h-full pointer-events-none crt'/>
                        <div className='z-20 flex m-2'>
                            <BoxLabel text='MESSENGER PIGEON' colour='bg-lime-300 saturate-400 ' width="w-60"/>
                            <div className='flex-1'/>
                            <a 
                                target='_blank'
                                rel='noopener noreferrer'
                                href={'https://github.com/gmharper/messengerpigeon'} 
                                className=''
                                data-tooltip-id='github_repo'
                                data-tooltip-content='MAIN REPO'
                                >
                                <GithubIcon className={icon_styling}/>
                            </a>
                            <p className='absolute top-11 right-14 font-bold text-sm'>FE</p>
                            <Tooltip id='github_repo' className='font-bold' style={{ backgroundColor:'white', color:"black" }}/>
                            
                            <a 
                                target='_blank'
                                rel='noopener noreferrer'
                                href={'https://github.com/gmharper/messengerpigeon-backend'} 
                                className=''
                                data-tooltip-id='github_backend'
                                data-tooltip-content='BACKEND REPO'
                                >
                                <GithubIcon className={icon_styling}/>
                            </a> 
                            <p className='absolute top-11 right-2 font-bold text-sm'>BE</p>
                            <Tooltip id='github_backend' className='font-bold' style={{ backgroundColor:'white', color:"black" }}/>
                        </div>

                        <h3 className='bg-zinc-900 font-pixel_operator rounded-sm '>Key Functionality:</h3>

                        <motion.div className='flex flex-col gap-3 px-4'>
                            <RevealText styling='text-left text-white'
                            text={"● PostgreSQL database backend with SQL injection prevention."} 
                            delay={0.3}/>
                        
                            <RevealText styling='text-left text-white'
                            text={"● RESTful API featuring multiple fetch, post, patch and delete \
                                    endpoints."} 
                            delay={0.8}/>

                            <RevealText styling='text-left text-white'
                            text={"● All endpoints are tested using Jest TDD."} 
                            delay={1.3}/>

                            <RevealText styling='text-left text-white'
                            text={"● MVC (Model-View-Controller) Architectural pattern."} 
                            delay={1.8}/>
                            
                            <RevealText styling='text-left text-white'
                            text={"● Loading and error hooks for every page."} 
                            delay={2.3} 
                            />

                            <RevealText styling='text-left text-white'
                            text={"● Utilises an optimistic rendering approach. When making an action on the site such as liking a post, \
                                the UI is updated before data is sent to the database. \
                                If the database returns an error, the UI is reverted back to its previous state."} 
                            delay={3}
                            />
                        </motion.div>

                        <div className='flex-1' />

                        <div className='z-20 relative flex flex-col h-25 bg-white rounded-sm p-2'>
                            <p className='bg-zinc-100 rounded-sm outline-1 outline-zinc-200 font-pixel_operator text-black text-sm w-120'>
                                As part of the JavaScript software development bootcamp at northcoders
                            </p>

                            <div className='flex-1' />

                            <img src={nc_logo} className='absolute h-16 bottom-2 right-2' />

                            <a href='https://messenger-pigeon.netlify.app/' 
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-60 h-10 flex bg-sky-300 outline-1 outline-blue-200 rounded-sm px-2 items-center hover:bg-sky-200 animate-grow'>
                                <p className='text-black text-lg'>VIEW DEMO SITE</p>
                                
                                <div className='flex-1'/>
                                <ArrowRightCircleIcon className='text-black h-6'/>
                            </a>
                        </div>
                    </div>
                </div>

                { getWindowSize()[0] > 1024?
                <div className='flex flex-row gap-4 mt-4'>
                    {/* <div className='z-10 flex flex-col w-8 h-70 bg-white rounded-sm lg:my-8 p-2 items-center content-center'>
                        <ArrowsPointingOutIcon className='w-6 h-6 text-black cursor-pointer'
                            onClick={() => { setActiveImage(br_wireframes) }}
                        /> 
                        { wireframesArray.map((letter, index) => {
                            return ( <p className='font-bold font-pixel_operator text-lg text-black h-6'>
                                {`${letter}`}
                            </p> )
                        })}
                    </div> */}

                    <Image1 />
                    <Image2 />
                    <IconsPanel icons_1={icons_2} icons_2={icons}/>
                </div> 
                :
                <div className='flex flex-col gap-4 mt-4'>
                    <BoxLabel text={'TECH STACK'} width="min-w-65"/>
                    <IconsPanelHoriz icons={icons.concat(icons_2)}/>
                    <Image1 />
                    <Image2 />
                </div>    
                }
            </div>
        </div>
    )
}

export default MessengerPigeon