// IMPORTS
import { Link } from "react-router"

import { HomeIcon } from "@heroicons/react/24/solid"

import github_logo from '../assets/icons/github-mark.png'
import linkedIn_logo from '../assets/icons/LI-In-Bug.png'

function TopNavBar () {
    return (
        <div className='flex bg-linear-to-r from-indigo-500 to-violet-500 h-18 px-4 py-2 mt-4 outline-white outline-b-3'>
            <div className='bg-zinc-900/60 rounded-xl'>
                <Link to="/" className='content-center'>
                    <HomeIcon className='p-3 text-white h-full hover:scale-110' />
                </Link>
            </div>

            <div className='bg-linear-to-r from-indigo-500 to-violet-500 h-full rounded-xl ml-4 px-6 py-1'>
                <p className='font-bold text-2xl'>George Harper | Software Developer</p>
                {/* <p className='font-italic text-right'>Javascript | HTML | React | Python | Godot </p> */}
            </div>
            
            <div className='flex-1'></div>

            <div className='content-left bg-zinc-900/60 mr-4 p-1 px-6 rounded-lg'>
                <p className='font-bold text-left'>georgemichaelharper@gmail.com</p>
                <p className='font-bold text-right'>07834738781</p>
            </div>

            <div className='flex bg-white p-1 rounded-lg'>
                <Link to='https://www.linkedin.com/in/george-harper-4a6132357' className='flex'>
                    <div
                        className='flex hover:scale-105'
                    >           
                        <img src={linkedIn_logo} className=''/>
                    </div>
                </Link>

                <div className='w-2'></div>

                <Link to='https://github.com/gmharper' className='flex'>
                    <div
                        className='flex bg-blue-400/0 hover:scale-105'
                    >           
                        <img src={github_logo} className=''/>
                    </div>
                </Link>
            </div>

            

            
        </div>
    )
}

export default TopNavBar