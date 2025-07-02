// IMPORTS
import { useEffect, useState } from "react"
import { Link } from "react-router"
import ReactPlayer from 'react-player'

// COMPONENTS
import GitHubButton from "../subcomponents/GithubButton"
import PlayButton from "../subcomponents/PlayButton"



function LinkCard (
    { 
        obj = {
        name: 'project_name',
        link: '/',
        github: 'https://github.com/gmharper'
        } 
    }) {

    let default_picture = 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D'

    const [hover_over, setHover_over] = useState(false)

    function handle_mouse_enter () {
        setHover_over(true)
    }

    function handle_mouse_leave () {
        setHover_over(false)
    }

    useEffect(() => {
        console.log('yes')
    }, [handle_mouse_enter])

    return (
        <div className='flex flex-col h-120 w-full rounded-xl bg-white/0 mx-4 mb-32 shadow-lg'>
            <Link to={obj.link} className='h-full w-full'>
                <div id='link_card'
                    className='bg-zinc-900 rounded-t-xl overflow-clip hover:scale-105 hover:outline-3 hover:outline-white hover:rounded-xl'
                    onMouseEnter={handle_mouse_enter}
                    onMouseLeave={handle_mouse_leave}
                >
                    { obj.video_link ? hover_over ?
                    <ReactPlayer src={obj.video_link}
                        wrapper={'link_card'}
                        controls={false}
                        pip={false}
                        playbackRate={1.5}
                        muted={true}
                        playing={true}
                        loop={true}
                    />
                        :
                        <img src={default_picture} 
                            className='object-cover h-full'
                        /> 
                    :
                    <img src={default_picture} 
                        className='object-cover h-full'
                    /> 
                    }
                </div>
            </Link>

            <div className='flex bg-linear-to-r from-indigo-500 to-violet-500 w-full h-full p-2 rounded-b-xl border-t-1 shadow-lg'>
                <div className='flex-1 mr-4 h-full'>
                   <div className='content-center bg-zinc-900/90 rounded-xl w-45 p-2 mb-4 outline-1 outline-white'>
                        <p className='font-bold text-lg'>{obj.name}</p>
                    </div>

                    <div className='content-top bg-zinc-900/90 rounded-xl p-2 w-full'>
                        <p className='flex-1 text-left'>{obj.description}</p>
                    </div> 
                </div>
                
                
                <div className='flex-col'>
                    <div className='flex-1 mb-2'>
                        <GitHubButton link={obj.github}/>
                    </div>
                    
                    { obj.playable ? 
                        <div className='flex'>
                            <PlayButton />
                        </div> : <></>
                    }
                </div>
                
            </div>
        </div>
            
        
    )
}

export default LinkCard