import { Link } from "react-router"

// COMPONENTS
import { JavascriptIcon, ReactIcon, DotEnvIcon, ExpressJsIcon, JestIcon, PostgresqlIcon, SupabaseIcon, GithubIcon, AxiosIcon, DoveIcon } from "../../assets/icons"
import { BoxLabel, IconsPanel, InfoTextPanel, ProjectCard, ViewPage } from "../style/index"
import Dove from "../../assets/img/dove-solid.svg"

// STYLING
let icon_styling = 'flex w-full h-12 content-center items-center '

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
    { id: 'jest', name: 'JEST TDD', component: <JestIcon className={icon_styling}/> },
    { id: 'spacer'},
    { id: 'github', name: 'GITHUB REPO', component: 
        <a 
            target='_blank'
            rel='noopener noreferrer'
            href={'https://github.com/gmharper/messengerpigeon'} className=''>
            <GithubIcon className={icon_styling}/>
        </a>  
    },
]

function MessengerPigeonFront () {
    return (
        <ProjectCard
        face={'front'}
        children={
            <div className='w-full h-full p-4'>
                <div className='p-12'>
                    <img src={Dove} className='flex w-full h-full text-white invert'/>

                </div>
                <div className='absolute bottom-5 right-5'>
                    <BoxLabel colour='bg-lime-400' text={'MESSENGER PIGEON'} />
                </div>
            </div>
        } />
    )
}

const back_text = 'A lightweight mock social media site built on a RESTful API using PostgreSQL, express and axios. With full test driven development of the backend using Jest. Feed the Pigeon!'

function MessengerPigeonBack ({ flipped=false }) {
    return (
        <ProjectCard 
        face={'back'}    
        children={
            <div className='flex flex-row w-full h-full p-4'>
                <div className='flex flex-col gap-2'>
                    <InfoTextPanel text={back_text} styling={'flex '} hasBeenFlipped={flipped} />

                    <ViewPage type='anchor' to={"messenger-pigeon.netlify.app"} text='VIEW SITE'/>
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