import { Link } from "react-router"

import github_logo from '../../assets/icons/github-mark.png'

function GitHubButton ({ link }) {
    return (
        <Link to='https://github.com/gmharper' className='flex w-30 h-10'>
            <div
                className='flex bg-white w-32 content-center rounded-full p-1 hover:scale-105 hover:outline-3 hover:outline-blue'
            >           
                <img src={github_logo} className='pl-1 h-full'/>
                <p className='flex-1 h-full content-center text-black'>GitHub</p>
            </div>
        </Link>
    )
}

export default GitHubButton