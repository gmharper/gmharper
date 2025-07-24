
// COMPONENTS
import { BoxLabel, IconsPanel, InfoTextPanel, ProjectCard } from "../style/index"
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
        <Link to={'https://github.com/gmharper/'} className=''>
            <GithubIcon className={icon_styling}/>
        </Link> }
]

function GoFront () {
    return (
        <ProjectCard 
        face={'front'}
        children={
            <div className='w-full h-full bg-stone-100'>
                <div className='absolute bottom-5 right-5'>
                    <BoxLabel colour='bg-lime-400' text={'MODE:GO'} />
                </div>
            </div>
        } />
    )
}

function GoBack ({ flipped=false }) {
    return (
        <ProjectCard 
        face={'back'}    
        children={
            <div className='flex flex-row w-full h-full p-4'>
                <div className='flex flex-col'>
                    <InfoTextPanel text={'Hello Hello'} styling={'flex w-60 h-60 p-3 bg-zinc-300 rounded-lg'} hasBeenFlipped={flipped} />
                </div>

                <div className='flex-1' />

                <IconsPanel icons_1={icons_1} icons_2={icons_2}/>

                <div className='absolute bottom-5 left-5'>
                    <BoxLabel colour='bg-lime-400' text={'MODE:GO'} />
                </div>
            </div>
        } />
    )
}

export { GoFront, GoBack }