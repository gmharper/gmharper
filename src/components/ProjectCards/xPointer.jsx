import { Link } from "react-router"

// COMPONENTS
import { BoxLabel, IconsPanel, InfoTextPanel, ProjectCard, ViewPage } from "../style/index"
import { TypescriptIcon, ReactIcon, GithubIcon, AxiosIcon } from "../../assets/icons"

// STYLING
let icon_styling = 'flex w-full h-12'

const icons_1 = [
    { id: 'typescript', name: 'TYPESCRIPT', component: <TypescriptIcon className={icon_styling}/> },
    { id: 'react', name: 'REACT', component: <ReactIcon className={icon_styling}/> },
    //{ id: ''}
]
const icons_2 = [
    { id: 'axios', name: 'AXIOS', component: <AxiosIcon className={icon_styling}/> },
    { id: 'spacer'},
    { id: 'github', name: 'GITHUB REPO', component: 
        <a 
            target='_blank'
            rel='noopener noreferrer'
            href={'https://github.com/gmharper/xPointer'} className=''>
            <GithubIcon className={icon_styling}/>
        </a> 
    }
]

function XPointerFront () {
    return (
        <ProjectCard children={
            <div className='w-full h-full bg-stone-100'>
                <div className='absolute bottom-5 right-5'>
                    <BoxLabel colour='bg-lime-400' text={'xPointer'} />
                </div>
            </div>
        } />
    )
}

const back_text = 'An API management and data retrieval service. Tap into any API and get the information \
stored on that API returned in an easy to read format. Also allows you to export to JSON or csv.'

function XPointerBack ({ flipped=false }) {
    return (
        <ProjectCard children={
            <div className='flex flex-row w-full h-full p-4'>
                <div className='flex flex-col gap-2'>
                    <InfoTextPanel text={back_text} styling={'flex '} hasBeenFlipped={flipped} />

                    <ViewPage type='anchor' to={"xpointer.netlify.app"} />
                </div>

                <div className='flex-1' />

                <IconsPanel icons_1={icons_1} icons_2={icons_2}/>

                <div className='absolute bottom-5 left-5'>
                    <BoxLabel colour='bg-lime-400' text={'xPointer'} />
                </div>
            </div>
        } />
    )
}

export { XPointerFront, XPointerBack }