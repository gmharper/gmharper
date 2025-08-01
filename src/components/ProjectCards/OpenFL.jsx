import { Link } from "react-router"

// COMPONENTS
import { BlenderIcon, GodotIcon, PythonIcon, GithubIcon } from "../../assets/icons"
import { BoxLabel, IconsPanel, InfoTextPanel, ProjectCard, ViewPage } from "../style/index"

import openFL_img from "../../assets/img/openFL.png"

// STYLING
let icon_styling = 'flex w-full h-12'

const icons_1 = [
    { id: 'python', name: 'PYTHON', component: <PythonIcon className={icon_styling}/> }
]

const icons_2 = [
    { id: 'godot', name: 'GODOT', component: <GodotIcon className={icon_styling}/> },
    { id: 'blender', name: 'BLENDER', component: <BlenderIcon className={icon_styling}/> },
    { id: 'excel', name: 'EXCEL', },
    { id: 'spacer'},
    { id: 'github', name: 'GITHUB REPO', component: 
        <a 
            target='_blank'
            rel='noopener noreferrer'
            href={'https://github.com/gmharper/gd-OpenFL'} className=''>
            <GithubIcon className={icon_styling}/>
        </a> 
    }
]

function OpenFLFront () {
    return (
        <ProjectCard 
        face={'front'}
        children={
            <div className='w-full h-full overflow-hidden'>
                <img src={openFL_img} className='scale-160 rotate-1 translate-x-10'/>
                <div className='absolute bottom-5 right-5'>
                    <BoxLabel colour='bg-lime-400' text={'OPENFL'} />
                </div>
            </div>
        } />
    )
}

const back_text = 'Open Fantasy League, A game that allows you to build your own custom fantasy football seasons. \
Features built in match engine that aims to mimic real life player data generation for points scoring. \
Inspired by my addiction to fantasy premier league.'

function OpenFLBack ({ flipped=false }) {
    return (
        <ProjectCard
        face={'back'} 
        children={
            <div className='flex flex-row w-full h-full p-4'>
                <div className='flex flex-col gap-2'>
                    <InfoTextPanel text={back_text} styling={'flex '} hasBeenFlipped={flipped} />

                    {/* <ViewPage type='route' to={"/brewreview"} /> */}
                </div>

                <div className='flex-1' />

                <IconsPanel icons_1={icons_1} icons_2={icons_2}/>

                <div className='absolute bottom-5 left-5'>
                    <BoxLabel colour='bg-lime-400' text={'OPENFL'} />
                </div>
            </div>
        } />
    )
}

export { OpenFLFront, OpenFLBack }