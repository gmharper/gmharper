// IMPORTS
import ReactPlayer from 'react-player'

// COMPONENTS
import IconsBar from '../Home/IconsBar'
import LinkCard from "../Home/LinkCard"

import br_video from '../../assets/video/br-video.mp4'

const brewReview_obj = {
    name: 'BrewReview',
    description: 'A Group project about Beer. Created in React Native and tested using Expo Go & Android Studio.',
    img_url: '',
    playable: false,
    link: '/brewReview',
    video_link: br_video,
    github: 'https://github.com/gmharper/BrewReview'
}

const xPointer_obj = {
    name: 'xPointer',
    description: 'An API assistant and API manager',
    img_url: '',
    playable: false,
    link: '/xPointer',
    github: 'https://github.com/gmharper/xPointer'
}

const fatPigeon_obj = {
    name: 'FatPigeon',
    description: 'A mock social media site I created during the frontend & backend sections of my software bootcamp. Feed the pigeon!',
    img_url: '',
    playable: false,
    link: '/fatPigeon',
    github: 'https://github.com/gmharper/nc-news'
}

const chess_obj = {
    name: 'Chess',
    description: 'The classic game with a vibrant modern look',
    img_url: '',
    playable: true,
    link: '/chess',
    github: 'https://github.com/gmharper/gd-Chess'
}

const go_obj = {
    name: 'Go',
    description: '',
    img_url: '',
    playable: true,
    link: '/go',
    github: 'https://github.com/gmharper/gd-Go'
}

const thirteenStep_obj = {
    name: '13Step',
    description: '',
    img_url: '',
    playable: true,
    link: '/13Step',
    github: 'https://github.com/gmharper/gd-13Step'
}

const fantasyfantasy_obj = {
    name: 'fantasy Fantasy',
    description: '',
    img_url: '',
    playable: false,
    link: '/fantasyfantasy',
    github: 'https://github.com/gmharper/gd-FantasyFantasy'
}

const openFL_obj = {
    name: 'OpenFL',
    description: 'Create your own fantasy football environment & play with friends. Inspired by my addiction to Fantasy Premier League.',
    img_url: '',
    playable: false,
    link: '/openFL',
    github: 'https://github.com/gmharper/gd-OpenFL'
}

function Home () {
    return (
        <div className='justify-items-center px-8'>
            <div className='m-8 justify-items-center'>
                <IconsBar />
            </div>

            <div className='flex-1 p-4 w-full bg-white rounded-xl'>
                <div className='flex bg-black rounded-xl p-4 mt-8'>
                    <p className='font-bold text-xl'>My Projects</p>
                </div>
            
                <div className='justify-items-center'>
                    <div className='flex flex-row mt-8 mb-4'>
                        <LinkCard obj={brewReview_obj} />
                        <LinkCard obj={thirteenStep_obj} />
                    </div>

                    <div className='flex flex-row my-4'>
                        <LinkCard obj={fatPigeon_obj} />
                        <LinkCard obj={xPointer_obj} />
                    </div>

                    <div className='flex flex-row my-4'>
                        <LinkCard obj={chess_obj} />
                        <LinkCard obj={go_obj} />
                    </div>
                </div>    

                    <div className='flex bg-zinc-800 py-4 px-8 rounded-xl'>
                        <p>Ongoing Projects</p>
                    </div>

                    <div className='flex flex-row justify-items-center my-8'>
                        <LinkCard obj={fantasyfantasy_obj} />
                        <LinkCard obj={openFL_obj} />
                    </div>
            </div>
        </div>
    )
}

export default Home