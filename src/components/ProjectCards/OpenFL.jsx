import { Link } from "react-router"

// COMPONENTS
import { BlenderIcon, GodotIcon, PythonIcon, GithubIcon } from "../../assets/icons"
import { BoxLabel, IconsPanel, InfoTextPanel, ProjectCard } from "../style/index"

// STYLING
let icon_styling = 'flex w-full h-12'

const icons_1 = [
    { id: 'python', name: 'PYTHON', component: <PythonIcon className={icon_styling}/> }
]

const icons_2 = [
    { id: 'godot', name: 'GODOT', component: <GodotIcon className={icon_styling}/> },
    { id: 'blender', name: 'BLENDER', component: <BlenderIcon className={icon_styling}/> },
    { id: 'excel', name: 'excel'},
    { id: 'spacer'},
    { id: 'github', name: 'GITHUB REPO', component: 
        <Link to={'https://github.com/gmharper/gd-OpenFL'} className=''>
            <GithubIcon className={icon_styling}/>
        </Link> }
]

function OpenFLFront () {
    return (
        <ProjectCard 
        face={'front'}
        children={
            <div className='w-full h-full'>
                <div className='absolute bottom-5 right-5'>
                    <BoxLabel colour='bg-lime-400' text={'OPENFL'} />
                </div>
            </div>
        } />
    )
}

const back_text = 'Open Fantasy League, A game that allows you to build your own fantasy football seasons \
in which you can create and manage your team. Features built in match engine that aims to mimic real life player data generation for team points scoring. \
Inspired by my addiction to fantasy premier league.'

function OpenFLBack ({ flipped=false }) {
    return (
        <ProjectCard
        face={'back'} 
        children={
            <div className='flex flex-row w-full h-full p-4'>
                <div className='flex flex-col'>
                    <InfoTextPanel text={back_text} styling={'flex w-60 h-60 p-3 bg-zinc-300 rounded-lg'} hasBeenFlipped={flipped} />
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