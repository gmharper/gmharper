
// COMPONENTS
import { BoxLabel, IconsPanel, InfoTextPanel, ProjectCard, ViewPage } from "../style/index"
import { JavascriptIcon, ReactIcon, MotionJsIcon, FirebaseIcon, TailwindCssIcon, GithubIcon } from "../../assets/icons"
import { Link } from "react-router"

// STYLING
let icon_styling = 'flex w-full h-12'

const icons_1 = [
    { id: 'javascript', name: 'JAVASCRIPT', component: <JavascriptIcon className={icon_styling}/> },
    { id: 'react', name: 'REACT', component: <ReactIcon className={icon_styling}/> }
]

const icons_2 = [
    { id: 'tailwind', name: 'TAILWIND CSS', component: <TailwindCssIcon className={icon_styling}/> },
    { id: 'motion', name: 'MOTION JS', component: <MotionJsIcon className={icon_styling}/> },
    { id: 'firebase', name: 'FIREBASE', component: <FirebaseIcon className={icon_styling}/> },
    { id: 'spacer'},
    { id: 'github', name: 'GITHUB REPO', component: 
        <a 
            target='_blank'
            rel='noopener noreferrer'
            href={'https://github.com/gmharper/gameboard_template'} className=''>
            <GithubIcon className={icon_styling}/>
        </a> 
    }
]

function GoFront () {
    return (
        <ProjectCard 
        face={'front'}
        children={
            <div className='w-full h-full bg-stone-100'>
                <div className='z-20 absolute bottom-5 right-5'>
                    <BoxLabel colour='bg-lime-400' text={'MODE:GO'} />
                </div>
            </div>
        } />
    )
}

const back_text = ''

function GoBack ({ flipped=false }) {
    return (
        <ProjectCard 
        face={'back'}    
        children={
            <div className='flex flex-row w-full h-full p-4'>
                <div className='flex flex-col gap-2'>
                    <InfoTextPanel text={back_text} styling={''} hasBeenFlipped={flipped} />

                    <ViewPage type='anchor' to={"/brewreview"} />
                </div>

                <div className='flex-1' />

                <IconsPanel icons_1={icons_1} icons_2={icons_2}/>

                <div className='z-20 absolute bottom-5 left-5'>
                    <BoxLabel colour='bg-lime-400' text={'MODE:GO'} />
                </div>
            </div>
        } />
    )
}

export { GoFront, GoBack }