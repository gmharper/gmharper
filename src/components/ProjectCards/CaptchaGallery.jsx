
// COMPONENTS
import { Link } from "react-router"
import { BoxLabel, IconsPanel, InfoTextPanel, ProjectCard, ViewPage } from "../style/index"
import JavascriptIcon, { FirebaseIcon, MotionJsIcon, TailwindCssIcon, GithubIcon, ReactIcon } from "../../assets/icons";

// STYLING
let icon_styling = 'flex w-full h-12'

const icons_1 = []
const icons_2 = [   
    { id: 'spacer' }, 
    { id: 'captchas', name: 'CAPTCHA GALLERY', component: 
        <a 
            target='_blank'
            rel='noopener noreferrer'
            href={'https://github.com/Bryxny/play-captcha'} className=''>
            <GithubIcon className={icon_styling}/>
        </a> 
    }
]

function CaptchaGalleryFront () {
    return (
        <ProjectCard 
        face={'front'}
        children={
            <div className='w-full h-full bg-stone-100'>
                <div className='z-20 absolute bottom-5 right-5'>
                    <BoxLabel colour='bg-lime-400' text={'CAPTCHA GALLERY'} />
                </div>
            </div>
        } />
    )
}

const back_text = 'A demo gallery of custom captcha concepts built using only Javascript and CSS.'

function CaptchaGalleryBack ({ flipped=false }) {
    return (
        <ProjectCard 
        face={'back'}
        children={
            <div className='flex flex-row w-full h-full p-4'>
                <div className='flex flex-col gap-2'>
                    <InfoTextPanel text={back_text} styling={'flex w-60 p-3 bg-zinc-300 rounded-sm'} hasBeenFlipped={flipped} />

                    <ViewPage type='anchor' to={"/brewreview"} />
                </div>

                <div className='flex-1' />

                <IconsPanel icons_1={icons_1} icons_2={icons_2}/>

                <div className='z-20 absolute bottom-5 left-5'>
                    <BoxLabel colour='bg-lime-400' text={'CAPTCHA GALLERY'} />
                </div>
            </div>
        } />
    )
}

export { CaptchaGalleryFront, CaptchaGalleryBack }