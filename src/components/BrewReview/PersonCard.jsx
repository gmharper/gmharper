// IMPORTS
import { Link } from 'react-router'

import github_logo from '../../assets/icons/github-mark.png'
import linkedIn_logo from '../../assets/icons/LI-In-Bug.png'

function PersonCard ({ person }) {
    return (
        <div className='flex flex-row bg-white p-1 rounded-xl mb-2 h-16 w-120'>
            <h2 className='text-left font-bold text-black'>{person.name}</h2>

            <div className='flex-1' />

            <div className='flex flex-row justify-end'>
                <Link to={person.linkedIn} className='flex'>
                    <div
                        className='flex hover:scale-105'
                    >           
                        <img src={linkedIn_logo} className='h-full'/>
                    </div>
                </Link>

                <div className='w-10'></div>

                <Link to={person.github} className='flex'>
                    <div
                        className='flex bg-blue-400/0 hover:scale-105 h-full'
                    >           
                        <img src={github_logo} className='h-full'/>
                    </div>
                </Link>

            </div>
        </div>    
    )
    
}

export default PersonCard