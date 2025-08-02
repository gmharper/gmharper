"use-client"

// IMPORTS
import { useContext, useEffect, useReducer, useState } from 'react'
import { AppContext } from '../../App'
import { Tooltip as ReactTooltip } from "react-tooltip"

import { motion, useInView } from 'framer-motion'

import bg from "../../assets/img/bg.png"
import crt_effect from "../../assets/img/crt-effect.jpg"

// COMPONENTS
import NIconsBar from '../Home/nIconsBar'

import { BoxLabel, FlipperCard, ProjectCard, UnfurlHeading } from '../style/index'
import { 
    BrewReviewFront, BrewReviewBack,
    MessengerPigeonFront, MessengerPigeonBack,
    ChessFront, ChessBack,
    GoFront, GoBack,
    XPointerFront, XPointerBack,
    OpenFLFront, OpenFLBack,
    FantasyFantasyFront, FantasyFantasyBack,
    CaptchaGalleryFront, CaptchaGalleryBack
 } from '../ProjectCards/index';

import { 
    ArrowTurnRightDownIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    ExclamationTriangleIcon,
    PlayCircleIcon,
    StopCircleIcon
 } from '@heroicons/react/24/solid'

// styling
let styles = {
    iconIndicator: {
        position: 'absolute',
        left: ((window.innerWidth)/2)+40
    },
    iconIndicatorText: {
        color: 'white'
    },
}

const scanner_indicator = 'items-center content-center justify-center min-w-60 w-60 h-12 bg-linear-to-r from-lime-600/60 to-lime-500/60 contrast-200 backdrop-invert drop-shadow-xl drop-shadow-green-500/40 rounded-xl border-4 border-double border-black'
const scanner_style = 'z-50 absolute -translate-y-2 h-28 w-28 content-center bg-green-500/30 contrast-200 backdrop-invert drop-shadow-xl drop-shadow-lime-500/60 border-8 border-double border-green-700 rounded-xl pointer-events-none'

// PROJECT CARDS
const project_cards = [
    { id: 'brew_review', hasBeenFlipped: false },
    { id: 'messenger_pigeon', hasBeenFlipped: false },
    { id: 'chess', hasBeenFlipped: false },
    { id: 'xPointer', hasBeenFlipped: false },
    { id: 'openFL', hasBeenFlipped: false },
    { id: 'go', hasBeenFlipped: false },
    { id: 'fantasy_fantasy', hasBeenFlipped: false },
    { id: 'captchas', hasBeenFlipped: false }
]

function Home () {
    const { playAnimations, setPlayAnimations, getWindowSize } = useContext(AppContext)

    const [halfWindow, setHalfWindow] = useState((window.innerWidth/2))
    const [activeElement, setActiveElement] = useState('')
    const [projectScroll, setProjectScroll] = useState(0)
    const [warningNoteOpen, setWarningNoteOpen] = useState(false)

    const projectReducer = (state, action) => {
        return state.map((project) => {
            if (project && project.id === action.id) return { ...project, hasBeenFlipped: true }
            else return { ...project }
        })
    }

    const [projects, setProjects] = useReducer(projectReducer, project_cards)

    const handleScroll = (event) => {
        const { scrollHeight, scrollTop, clientHeight } = event.target;
        const scroll = scrollHeight - scrollTop - clientHeight

        setProjectScroll(scrollTop)
    }


    useEffect(() => {
        setHalfWindow((window.innerWidth)/2)
    }, [project_cards, window.innerWidth])

    return (
        <motion.div id={'home_parent'} className='relative flex flex-col items-center'
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {/* <img src={bg} className='-z-10 absolute top-0 brightness-50 scale-100'/> */}

            <NIconsBar activeElement={activeElement} setActiveElement={setActiveElement} />
            <div className={'overflow-hidden ' +scanner_style} >
                <img src={crt_effect} className='absolute scale-300 contrast-50 opacity-50'/>
            </div>

            <div className='flex flex-row w-screen px-6 xl:px-16 mt-2 invisible sm:visible'>
                <UnfurlHeading 
                    icon={<ArrowTrendingUpIcon 
                        className='size-6 text-black'/>} 
                    text_closed={'SUPER TECH STACK'} 
                    text_open={'A LIST OF TECHNOLOGIES USED ON MY PROJECTS'} 
                    width_closed={300} 
                    width_open={450}
                />

                <div className='flex-1'/>
            </div>

            { getWindowSize()[0] < 1536 ?
                <div className={'absolute flex flex-row top-31 sm:right-5 overflow-hidden ' +scanner_indicator} >
                    <p style={{ color: 'white' }} className={'text-2xl font-dot_matrix content-center ' +(playAnimations && 'animate-text-pulsate')}>{activeElement ? activeElement.name : ''}</p>
                    <img src={crt_effect} className='absolute scale-100 contrast-50 opacity-40'/>
                </div>
                :
                <div className={'absolute flex flex-row -top-17 overflow-hidden ' +scanner_indicator} >
                    <p style={{ color: 'white' }} className={'text-2xl font-dot_matrix content-center ' +(playAnimations && 'animate-text-pulsate')} >{activeElement ? activeElement.name : ''}</p>
                    <img src={crt_effect} className='absolute scale-100 contrast-50 opacity-40'/>
                </div>
            }

            <div id={'home_projects_heading'} className='flex flex-col justify-center items-center'>
                <div className='flex flex-row my-2'>
                    <UnfurlHeading 
                        icon={<ArrowTrendingDownIcon 
                            className='size-6 text-black'/>} 
                        text_closed={'MY PROJECTS'} 
                        text_open={'A LIST OF PROJECTS THAT I AM CURRENTLY WORKING ON'} 
                        width_closed={160} 
                        width_open={500}/>

                    <div className='flex-1'/>
                </div>
                
                <motion.div 
                    className='flex flex-col -mr-8 bg-white/90 h-160 overflow-x-none overflow-y-scroll overscroll-contain rounded-xl overflow-hidden'
                    onScroll={(e) => {handleScroll(e)}}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.05 }}
                    >
                    
                    <div className='z-30 flex flex-row my-4 px-4'>
                        <div className='flex-1' />
                        <motion.div className='flex flex-row w-32 h-8 bg-yellow-300 rounded-md items-center content-center px-3 animate-grow'
                            initial={{ width: 150}}
                            animate={{ width: warningNoteOpen? 900 : 150}}
                            transition={{ duration: 0.1 }}
                            onMouseEnter={() => {setWarningNoteOpen(true)}}
                            onMouseLeave={() => {setWarningNoteOpen(false)}}
                        >
                            { warningNoteOpen ?
                                <motion.p className='font-bold text-black whitespace-nowrap'
                                    variants={{
                                        visible: { opacity: warningNoteOpen? 1 : 0 }, hidden: {opacity: 0}
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ staggerChildren: 0.5 }}>
                                        projects are intended as tech demos and are not necessarily meant to represent complete website functionality.    
                                </motion.p> : <p className='text-sm text-black font-bold'>PLEASE NOTE</p>
                            }
                            <div className='flex-1' />
                            <ExclamationTriangleIcon className='h-6 text-black'/>
                        </motion.div>
                    </div>

                    <div className='grid place-items-center px-12 gap-x-20 gap-y-15 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-32 '>
                        <FlipperCard
                            id={'brew_review'}
                            setFlipped={setProjects} 
                            front={ <BrewReviewFront flipped={projects[0].hasBeenFlipped}/> }
                            back={ <BrewReviewBack flipped={projects[0].hasBeenFlipped} /> } 
                        />
                        <FlipperCard
                            id={'messenger_pigeon'}
                            setFlipped={setProjects} 
                            front={ <MessengerPigeonFront flipped={projects[1].hasBeenFlipped} /> } 
                            back={ <MessengerPigeonBack flipped={projects[1].hasBeenFlipped} /> } 
                        />
                        <FlipperCard
                            id={'chess'}
                            setFlipped={setProjects}  
                            front={ <ChessFront flipped={projects[2].hasBeenFlipped} /> } 
                            back={ <ChessBack flipped={projects[2].hasBeenFlipped} /> } 
                        />
                        <FlipperCard
                            id={'xPointer'}
                            setFlipped={setProjects}  
                            front={ <XPointerFront flipped={projects[3].hasBeenFlipped} /> } 
                            back={ <XPointerBack flipped={projects[3].hasBeenFlipped} /> } 
                        />
                        <FlipperCard
                            id={'openFL'}
                            setFlipped={setProjects}  
                            front={ <OpenFLFront flipped={projects[4].hasBeenFlipped} /> } 
                            back={ <OpenFLBack flipped={projects[4].hasBeenFlipped} /> } 
                        />
                        <FlipperCard
                            id={'fantasy_fantasy'}
                            setFlipped={setProjects}  
                            front={ <FantasyFantasyFront flipped={projects[6].hasBeenFlipped} /> } 
                            back={ <FantasyFantasyBack flipped={projects[6].hasBeenFlipped} /> } 
                            
                            
                        />
                        {/* <FlipperCard
                            id={'go'} 
                            setFlipped={setProjects}  
                            front={ <GoFront flipped={projects[5].hasBeenFlipped} /> } 
                            back={ <GoBack flipped={projects[5].hasBeenFlipped} /> } 
                        /> */}
                        <FlipperCard 
                            id={'captchas'} 
                            setFlipped={setProjects}
                            front={ <CaptchaGalleryFront flipped={projects[6].hasBeenFlipped} /> } 
                            back={ <CaptchaGalleryBack flipped={projects[6].hasBeenFlipped} /> } 
                        />
                    </div>    

                    <div className='flex flex-col min-h-40 w-full bg-linear-to-t from-zinc-900 to-zinc-800 items-center'>
                        <p className='text-white font-pixel_operator border-b-1 border-stone-700 py-1'>The LinkedIn logo is a copyright of the LinkedIn Corporation</p>
                        <p className='text-white font-pixel_operator border-b-1 border-stone-700 py-1'>The GITHUB® logo is a copyright of GitHub, Inc.</p>
                        <div className='flex flex-row justify-center border-b-1 border-stone-700 py-1'>
                            <p className='text-white font-pixel_operator'>Icons by </p>
                            <a  href={"https://heroicons.com/"} 
                                target='_blank'
                                rel='noopener noreferrer'
                                className='bg-zinc-900 font-pixel_operator px-1 ml-1'>Heroicons</a> 
                            <p className='text-white font-pixel_operator'>,</p>
                            <a href={"https://fontawesome.com/"} 
                                target='_blank'
                                rel='noopener noreferrer' 
                                className='bg-zinc-900 text-white font-pixel_operator rounded-sm px-1 mx-1'>Font Awesome</a> 
                            <p className='text-white font-pixel_operator'>&</p> 
                            <a href={"https://boxicons.com/"} 
                                target='_blank'
                                rel='noopener noreferrer' 
                                className='bg-zinc-900 text-white font-pixel_operator rounded-sm px-1 mx-1'>Boxicons</a> 
                            <p className='text-white font-pixel_operator'>are used under free CC 4.0 license</p>
                            
                        </div>
                        <p className='w-full h-full font-bold bg-zinc-900/90 py-1 content-center'>Email: georgemichaelharper@gmail.com | Phone: 07834738781</p>
                    </div>
                </motion.div>
            </div>

            {/* <div className='-translate-y-20 animate-bounce' id='home_scroll_heading'>
                { (projectScroll < 100) ? 
                <BoxLabel text='SCROLL FOR MORE' text_colour='text-black'/> : <></> 
                }
            </div> */}

            <div className='fixed bottom-5 left-5 bg-white rounded-sm p-2 cursor-pointer' 
                data-tooltip-id="animation_toggle"
                onClick={() => {setPlayAnimations(!playAnimations)}}
            >
                { playAnimations ?
                    <StopCircleIcon className='w-8 h-8 text-black'/> :
                    <PlayCircleIcon className='w-8 h-8 text-black'/>
                }
                <ReactTooltip
                    opacity={100}
                    className='z-100 font-bold' 
                    id={"animation_toggle"}
                    content={playAnimations ? "STOP ANIMATIONS" : "PLAY ANIMATIONS"}
                    place={'right'}
                />
            </div>

            
        </motion.div>
    )
}

export default Home