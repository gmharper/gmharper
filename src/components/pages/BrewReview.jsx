
"use-client"

// IMPORTS
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router"
import { motion } from "framer-motion"
import { AppContext } from "../../App"

import br_video from "../../assets/video/br-video.mp4"
import br_wireframes from "../../assets/img/br-wireframes.png"
import br_jira from "../../assets/img/br-jira.png"
import br_branches from "../../assets/img/br-branches.png"
import nc_logo from "../../assets/img/nc-logo.png"

import JavascriptIcon, { AndroidIcon, ExpoIcon, FirebaseIcon, GithubIcon, ReactIcon } from "../../assets/icons"

// COMPONENTS
import PersonCard from "../BrewReview/PersonCard"
import { BoxLabel, IconsPanel } from "../style/index"

import { ArrowRightCircleIcon, ChevronRightIcon, ArrowsPointingOutIcon, XMarkIcon } from "@heroicons/react/24/solid"

// STYLING
let icon_styling = 'flex w-full h-12 '

const group_members = [
    {
        name: 'Morgan Hewitt',
        linkedIn: 'https://www.linkedin.com/in/morgan-hewitt-8a68041ab/',
        github: 'https://github.com/loafdimension'
    },
    {
        name: 'Manuel González',
        linkedIn: 'https://www.linkedin.com/in/manuel-gonzalez-caldas/',
        github: 'https://github.com/manuelgcl25'
    },
    {
        name: 'Katherin Bennett',
        linkedIn: 'https://www.linkedin.com/in/katherinbennett/',
        github: 'https://github.com/katybennett'
    },
    {
        name: 'Sam Joy',
        linkedIn: 'https://www.linkedin.com/in/sam-joy1/',
        github: 'https://github.com/samjoy1',
    },
    {
        name: 'Nicole Raymond',
        linkedIn: 'https://www.linkedin.com/in/nicole-raymond-b70007188/',
        github: 'https://github.com/niicraymond'
    }
]

const icons = [
    { id: 'javascript', name: 'JAVASCRIPT', component: <JavascriptIcon className={icon_styling}/> },
    { id: 'react', name: 'REACT NATIVE', component: <ReactIcon className={icon_styling}/> },
    { id: 'expo', name: 'EXPO GO', component: <ExpoIcon className={icon_styling}/> },
    { id: 'firebase', name: 'FIREBASE', component: <FirebaseIcon className={icon_styling}/> },
    { id: 'android', name: 'ANDROID STUDIO', component: <AndroidIcon className={icon_styling}/> },
]

const icons_2 = [
    { id: 'github', name: 'GITHUB REPO', component: 
        <a 
            target='_blank'
            rel='noopener noreferrer'
            href={'https://github.com/gmharper/BrewReview'} className=''>
            <GithubIcon className={icon_styling}/>
        </a> 
    }
]

function BrewReview () {
    const { getWindowSize } = useContext(AppContext)

    const [activeImage, setActiveImage] = useState('')
    const [showWireframes, setShowWireframes] = useState(false)

    const [showGithubArrows, setShowGithubArrows] = useState(false)
    const [showJiraArrows, setShowJiraArrows] = useState(false)

    let wireframesArray = "WIREFRAMES".split("")

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

            <div className='flex px-8 w-360 flex-col gap-4 items-center justify-center content-center bg-zinc-900/90 py-4 lg:px-4'>
                <div className='flex flex-row gap-2 lg:gap-8'>
                    <div className='relative z-10 flex flex-col gap-2 bg-zinc-800 min-w-90 rounded-sm overflow-hidden'>
                        <div className='absolute flex w-full h-full pointer-events-none crt'/>
                        <div className='z-20 flex m-2'>
                            <BoxLabel text='BREW REVIEW' colour='bg-lime-400' width="w-45"/>
                        </div>
                        <h3 className='bg-zinc-900 font-pixel_operator rounded-sm '>Made in Collaboration with:</h3>
                        <PersonCard person={group_members[0]}/>
                        <PersonCard person={group_members[1]}/>
                        <PersonCard person={group_members[2]}/>
                        <PersonCard person={group_members[3]}/>
                        <PersonCard person={group_members[4]}/>

                        <div className='flex-1' />
                        <div className='z-20 relative flex flex-col h-25 bg-white rounded-sm p-2'>
                            <p className='bg-zinc-100 rounded-sm outline-1 outline-zinc-200 font-pixel_operator text-black text-sm w-65'>As part of the JavaScript software development bootcamp at northcoders</p>
                            <div className='flex-1' />
                            <img src={nc_logo} className='absolute h-16 bottom-2 right-2' />
                            <a href='https://www.northcoders.com/blog/brew-review/' 
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-60 h-10 flex bg-sky-300 outline-1 outline-blue-200 rounded-sm px-2 items-center hover:bg-sky-200 animate-grow'>
                                <p className='text-black text-lg'>SEE THE FULL PROJECT</p>
                                
                                <div className='flex-1'/>
                                <ArrowRightCircleIcon className='text-black h-6'/>
                            </a>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='relative rounded-sm overflow-hidden min-2-200 crt'>
                            <video src={br_video} className='scale-180 h-100' controls={true} autoPlay={true} loop={true} muted={true} />
                            
                        </div>
                        <BoxLabel text={'DEMO VIDEO'} />
                    </div>



                </div>

                <div className='flex flex-row gap-4'>
                    <div className='z-10 flex flex-col w-8 h-70 bg-white rounded-sm lg:my-8 p-2 items-center content-center'>
                        <ArrowsPointingOutIcon className='w-6 h-6 text-black cursor-pointer'
                            onClick={() => {setActiveImage(br_wireframes)}}
                        /> 
                        { wireframesArray.map((letter, index) => {
                            return ( <p className='font-bold font-pixel_operator text-lg text-black h-6'>
                                {`${letter}`}
                            </p> )
                        })}
                    </div>

                    <div className='flex flex-col gap-1 rounded-xl min-w-65'>
                        <BoxLabel text={'BRANCHES & COMMIT HISTORY'} width="min-w-65"/>

                        <div className='relative flex z-10 rounded-xl items-center justify-center cursor-pointer crt'
                                onMouseEnter={() => {setShowGithubArrows(true)}}
                                onMouseLeave={() => {setShowGithubArrows(false)}}
                                onClick={() => {setActiveImage(br_branches)}}
                        >
                            <img src={br_branches} className='md:h-60 lg:h-80 rounded-sm hover:blur-[1px]' />
                            { showGithubArrows && <ArrowsPointingOutIcon className='z-20 absolute w-32 h-32 text-white/40 pointer-events-none' /> }
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 rounded-xl min-w-65'>
                        <BoxLabel text={'JIRA FOR TICKETING & WORKFLOW'} width="min-w-65"/>

                        <div className='z-10 relative flex rounded-xl items-center justify-center cursor-pointer crt'
                                onMouseEnter={() => {setShowJiraArrows(true)}}
                                onMouseLeave={() => {setShowJiraArrows(false)}}
                                onClick={() => {setActiveImage(br_jira)}}
                        >
                            <img src={br_jira} className='md:h-60 lg:h-80 rounded-sm hover:blur-[1px]' loading=""/>
                            { showJiraArrows && <ArrowsPointingOutIcon className='z-20 absolute w-32 h-32 text-black/40 pointer-events-none' /> }
                        </div>
                    </div>

                    <IconsPanel icons_1={[]} icons_2={icons}/>
                </div>
            </div>
        </div>
    )
}

export default BrewReview