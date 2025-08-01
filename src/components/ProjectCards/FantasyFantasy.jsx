import { Link } from "react-router"

// COMPONENTS
import { BoxLabel, IconsPanel, InfoTextPanel, ProjectCard, ViewPage } from "../style"
import { BlenderIcon, GodotIcon, PythonIcon, GithubIcon } from "../../assets/icons"

// STYLING
let icon_styling = 'flex w-full h-12'

const icons_1 = [
    { id: 'python', name: 'PYTHON', component: <PythonIcon className={icon_styling}/> },
]
const icons_2 = [
    { id: 'godot', name: 'GODOT', component: <GodotIcon className={icon_styling}/> },
    { id: 'blender', name: 'BLENDER', component: <BlenderIcon className={icon_styling}/> },
    { id: 'spacer'},
    { id: 'github', name: 'GITHUB REPO', component: 
        <a 
            target='_blank'
            rel='noopener noreferrer'
            href={'https://github.com/gmharper/gd-FantasyFantasy'} className=''>
            <GithubIcon className={icon_styling}/>
        </a> 
    }
]

function FantasyFantasyFront () {
    return (
        <ProjectCard 
        face={'front'}
        children={
            <div className='w-full h-full bg-stone-100'>
                <div className='absolute bottom-5 right-5'>
                    <BoxLabel colour='bg-lime-400' text={'FANTASY FANTASY'} />
                </div>
            </div>
        } />
    )
}

function FantasyFantasyBack ({ flipped=false }) {
    return (
        <ProjectCard 
        face={'back'}    
        children={
            <div className='flex flex-row w-full h-full p-4'>
                <div className='flex flex-col gap-2'>
                    <InfoTextPanel text={'Hello Hello'} styling={'flex '} hasBeenFlipped={flipped} />

                    {/* <ViewPage type='route' to={"/brewreview"} /> */}
                </div>

                <div className='flex-1' />

                <IconsPanel icons_1={icons_1} icons_2={icons_2}/>

                <div className='absolute bottom-5 left-5'>
                    <BoxLabel colour='bg-lime-400' text={'FANTASY FANTASY'} />
                </div>
            </div>
        } />
    )
}

export { FantasyFantasyFront, FantasyFantasyBack }