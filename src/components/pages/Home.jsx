"use-client"

// IMPORTS
import { useContext, useEffect, useReducer, useState } from 'react'
import { AppContext } from '../../App'

import { motion, useInView } from 'framer-motion'

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
    FantasyFantasyFront,
    FantasyFantasyBack
 } from '../ProjectCards/index';

import { 
    ArrowTurnRightDownIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon
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

const scanner_indicator = 'items-center content-center justify-center min-w-60 w-60 h-12 invisible md:visible bg-linear-to-r from-green-600/60 to-green-500/60 contrast-200 backdrop-invert drop-shadow-xl drop-shadow-green-500/40 rounded-xl border-4 border-double border-black'
const scanner_style = 'z-50 absolute h-30 w-30 content-center bg-green-500/30 contrast-200 backdrop-invert drop-shadow-xl drop-shadow-green-500/60 border-8 border-double border-green-700 rounded-xl pointer-events-none'

// PROJECT CARDS
const project_cards = [
    { id: 'brew_review', hasBeenFlipped: false },
    { id: 'messenger_pigeon', hasBeenFlipped: false },
    { id: 'mode_chess', hasBeenFlipped: false },
    { id: 'xPointer', hasBeenFlipped: false },
    { id: 'openFL', hasBeenFlipped: false },
    { id: 'mode_go', hasBeenFlipped: false },
    { id: 'fantasy_fantasy', hasBeenFlipped: false },
]

function Home () {
    const { getWindowSize } = useContext(AppContext)

    const [halfWindow, setHalfWindow] = useState((window.innerWidth/2))

    const [activeElement, setActiveElement] = useState('')

    const [projectScroll, setProjectScroll] = useState(0)

    const [techHeadingMouseOver, setTechHeadingMouseOver] = useState(false)
    const [projectHeadingMouseOver, setProjectHeadingMouseOver] = useState(false)


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
            <NIconsBar activeElement={activeElement} setActiveElement={setActiveElement} />
            <div className={scanner_style} />

            <div className='flex flex-row w-screen px-8 xl:px-16 my-4'>
                <UnfurlHeading 
                icon={<ArrowTrendingUpIcon 
                    className='size-6 text-black'/>} 
                text_closed={'SUPER DUPER TECH STACK'} 
                text_open={'A LIST OF TECHNOLOGIES USED ON MY PROJECTS'} 
                width_closed={300} 
                width_open={500}/>

                <div className='flex-1'/>
            </div>

            

            { getWindowSize()[0] < 1280 ?
            <div className={'absolute top-31 right-5 ' +scanner_indicator} >
                <p style={{ color: 'white' }} className='text-2xl font-dot_matrix content-center' >{activeElement ? activeElement.name : ''}</p>
            </div>
            :
            <div className={'absolute -top-14 ' +scanner_indicator} >
                <p style={{ color: 'white' }} className='text-2xl font-dot_matrix content-center' >{activeElement ? activeElement.name : ''}</p>
            </div>
            }

            <div id={'home_projects_heading'} className='flex flex-col justify-center items-center'>
                <div className='flex flex-row mb-4'>
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
                    className='flex flex-col h-160 -mr-8 bg-zinc-300 overflow-y-scroll overflow-x-none overscroll-contain rounded-sm'
                    onScroll={(e) => {handleScroll(e)}}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    >
                    <div className='flex flex-row mr-8 mt-8'>
                        <div className='flex-1' />
                        <div className='h-6 px-2 mb-4 rounded-full bg-zinc-900 items-center content-center'>
                            <p className='text-white text-xs'>note: all projects are demos and are not necessarily meant to represent complete website functionality.</p>
                        </div>
                    </div>

                    <div className='grid place-items-center px-12 gap-x-20 gap-y-40 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-32 '>
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
                        <FlipperCard
                            id={'go'} 
                            setFlipped={setProjects}  
                            front={ <GoFront flipped={projects[5].hasBeenFlipped} /> } 
                            back={ <GoBack flipped={projects[5].hasBeenFlipped} /> } 
                        />
                        <FlipperCard front={ <></> } back={ <></> } 
                            id={'empty'} 
                            setFlipped={setProjects}
                        />
                    </div>    

                    <div className='flex min-h-100 w-full bg-black'>
                        <p className='text-white'>LinkedIn logo is a trademark of linkedIn</p>
                    </div>
                </motion.div>

            </div>

            <div className='-translate-y-15' id='home_scroll_heading'>
                { (projectScroll < 100) ? 
                <BoxLabel text='SCROLL FOR MORE' text_colour='text-black'/> : <></> 
                }
            </div>
        </motion.div>
    )
}

export default Home