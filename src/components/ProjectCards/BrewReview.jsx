"use-client"

import { useContext, useEffect } from "react"
import { Link } from "react-router"
import { motion } from "framer-motion"
import { AppContext } from "../../App"

import br_video from '../../assets/video/br-video.mp4'

// COMPONENTS
import { BoxLabel, IconsPanel, InfoTextPanel, ProjectCard, ViewPage } from "../style/index"
import JavascriptIcon, { AndroidIcon, ExpoIcon, FirebaseIcon, GithubIcon, ReactIcon } from "../../assets/icons"

import { ArrowRightCircleIcon } from "@heroicons/react/24/solid"

// STYLING
let icon_styling = 'flex w-full h-12 '

const icons_1 = [
    { id: 'javascript', name: 'JAVASCRIPT', component: <JavascriptIcon className={icon_styling}/> },
    { id: 'react', name: 'REACT NATIVE', component: <ReactIcon className={icon_styling}/> },
]

const icons_2 = [
    { id: 'expo', name: 'EXPO GO', component: <ExpoIcon className={icon_styling}/> },
    { id: 'firebase', name: 'FIREBASE', component: <FirebaseIcon className={icon_styling}/> },
    { id: 'android', name: 'ANDROID STUDIO', component: <AndroidIcon className={icon_styling}/> },
    { id: 'spacer'},
    { id: 'github', name: 'GITHUB REPO', component: 
        <a 
            target='_blank'
            rel='noopener noreferrer'
            href={'https://github.com/gmharper/BrewReview'} className=''>
            <GithubIcon className={icon_styling}/>
        </a> 
    }
]

function BrewReviewFront ({ flipped=false }) {
    const { playAnimations } = useContext(AppContext)

    useEffect(() => {
        let br_vid = document.getElementById("br_vid")

        playAnimations ? br_vid.play() : br_vid.pause()
    }, [playAnimations])

    return (
        <ProjectCard
        face={'front'} 
        children={
            <div className='w-full h-full'>
                <video id={"br_vid"} src={br_video} className='scale-180 h-100' autoPlay={playAnimations} loop={true} muted={true} controls={false} />
                <div className='absolute bottom-5 right-5'>
                    <BoxLabel colour='bg-lime-400' text={'BREW REVIEW'} />
                </div>
            </div> 
        } />
    )
}

const back_text = 'An app for beer enthusiasts alike to post, share, and talk about their favourite beers. \
A group project completed over 3 weeks of my software development bootcamp with 5 of \
my fellow course members at northcoders.'

function BrewReviewBack ({ flipped=false }) {
    return (
        <ProjectCard
        face={'back'} 
        children={
            <div className='flex flex-row w-full h-full p-4'>
                <div className='flex flex-col gap-2'>
                    <InfoTextPanel text={back_text} styling={'flex '} hasBeenFlipped={flipped}/>

                    <ViewPage type={'route'} to={"/brewreview"} />
                </div>

                <div className='flex-1'/>

                <IconsPanel icons_1={icons_1} icons_2={icons_2} />
                <p className='text-xs text-white absolute top-29 right-17 pointer-events-none'>NATIVE</p>

                <div className='absolute bottom-5 left-5'>
                    <BoxLabel colour='bg-lime-400' text={'BREW REVIEW'} />
                </div>
            </div> 
        } />
    )
}

export { BrewReviewFront, BrewReviewBack }