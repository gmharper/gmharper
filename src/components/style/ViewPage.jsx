
// IMPORTS
import { Link } from "react-router"

import { ArrowRightCircleIcon } from "@heroicons/react/24/solid"

function ViewPage ({ type, to='' }) {
    return (
        <>
            { type==='route' ?
            <Link 
                className='flex flex-row h-8 rounded-sm bg-sky-400 outline-1 outline-blue-200 content-center items-center justify-center shadow-sm shadow-sky-300' 
                to={to}>
                <p className='font-bold text-black mr-2'>VIEW PAGE</p>
                <ArrowRightCircleIcon className='h-6 text-black'/>
            </Link> : type==='anchor' ?
            <a
                className='flex flex-row h-8 rounded-sm bg-sky-400 outline-1 outline-blue-200 content-center items-center justify-center shadow-sm shadow-sky-300' 
                target='_blank'
                rel='noopener noreferrer'
                href={to}>
                <p className='font-bold text-black mr-2'>VIEW PAGE</p>
                <ArrowRightCircleIcon className='h-6 text-black'/>
            </a> : <></>
            }
        </>
    )
}

export default ViewPage