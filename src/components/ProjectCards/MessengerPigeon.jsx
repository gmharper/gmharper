import { Link } from "react-router"

// COMPONENTS
import { JavascriptIcon, ReactIcon, DotEnvIcon, ExpressJsIcon, JestIcon, PostgresqlIcon, SupabaseIcon, GithubIcon, AxiosIcon } from "../../assets/icons"
import { BoxLabel, IconsPanel, InfoTextPanel, ProjectCard } from "../style/index"

// STYLING
let icon_styling = 'flex w-full h-12'

const icons_1 = [
    { id: 'javascript', name: 'JAVASCRIPT', component: <JavascriptIcon className={icon_styling}/> },
    { id: 'react', name: 'REACT', component: <ReactIcon className={icon_styling}/> },
    { id: 'express', name: 'EXPRESS JS ROUTING', component: <ExpressJsIcon className={icon_styling}/> },
    
]

const icons_2 = [
    { id: 'postgres', name: 'PostgreSQL', component: <PostgresqlIcon className={icon_styling}/> },
    { id: 'supabase', name: 'SUPABASE', component: <SupabaseIcon className={icon_styling}/> },
    { id: 'dotenv', name: 'DOT ENV', component: <DotEnvIcon className={icon_styling}/> },
    { id: 'axios', name: 'AXIOS', component: <AxiosIcon className={icon_styling}/> },
    { id: 'jest', name: 'JEST TDD', component: <JestIcon className={icon_styling+' text-white p-2'}/> },
    { id: 'spacer'},
    { id: 'github', name: 'GITHUB REPO', component: 
        <Link to={'https://github.com/gmharper/messengerpigeon'} className=''>
            <GithubIcon className={icon_styling}/>
        </Link> },
]

function MessengerPigeonFront () {
    return (
        <ProjectCard
        face={'front'}
        children={
            <div className='w-full h-full p-4'>
                <div className='absolute bottom-5 right-5'>
                    <BoxLabel colour='bg-lime-400' text={'MESSENGER PIGEON'} />
                </div>
            </div>
        } />
    )
}

function MessengerPigeonBack ({ flipped=false }) {
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
                    <BoxLabel colour='bg-lime-400' text={'MESSENGER PIGEON'} />
                </div>
            </div>
        } />
    )
}

export { MessengerPigeonFront, MessengerPigeonBack}