" use client"

// IMPORTS
import { Link } from 'react-router'
import { motion } from 'framer-motion'

import github_logo from '../../assets/img/github-mark.svg'
import linkedIn_logo from '../../assets/img/linkedIn-logo.png'

function PersonCard ({ person, delay=0.5 }) {
    return (
        <motion.div className='flex flex-row bg-white p-1 h-10 w-90'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: delay }}
        >
            <p className='text-xl text-left font-bold font-pixel_operator text-black content-center px-2'>{person.name}</p>

            <div className='flex-1' />

            <div className='flex flex-row justify-end'>
                <a href={person.github} 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex mr-1'>
                    <div
                        className='flex bg-blue-400/0 hover:scale-105 h-full rounded-full overflow-hidden'
                    >           
                        <img src={github_logo} className='h-full'/>
                    </div>
                </a>

                <a href={person.linkedIn} 
                    target='_blank'
                    rel='noopener noreferrer' 
                    className='flex'>
                    <div
                        className='flex hover:scale-105 rounded-full overflow-hidden'
                    >           
                        <img src={linkedIn_logo} className='h-full'/>
                    </div>
                </a>
            </div>
        </motion.div>    
    )
    
}

export default PersonCard