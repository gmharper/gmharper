// IMPORTS
import { Link } from "react-router"
import { PlayIcon } from "@heroicons/react/24/solid"

function PlayButton ({ link }) {
    return (
        <Link to={link} >
            <div className='flex bg-green-400 w-30 h-10 content-center rounded-full hover:scale-105 hover:outline-3 hover:outline-blue'>
                <PlayIcon className='pl-1 scale-90 text-white h-full'/>
                <p className='flex-1 h-full content-center font-bold text-white text-center'>Play</p>
            </div>
        </Link>
    )
}

export default PlayButton