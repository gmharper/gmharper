// IMPORTS
import { Tooltip as ReactTooltip } from 'react-tooltip'

import javascript_icon from '../../assets/icons/js_icon.png'
import typescript_icon from '../../assets/icons/typescript_icon.png'
import nodejs_icon from '../../assets/icons/nodejs_icon.svg'
import git_icon from '../../assets/icons/git_icon.png'
import jest_icon from '../../assets/icons/jest_icon.svg'
import python_icon from '../../assets/icons/python_icon.png'
import react_icon from '../../assets/icons/react_icon.svg'
import html_icon from '../../assets/icons/html-5_icon_64.png'
import css_icon from '../../assets/icons/css-3_icon_64.png'
import tailwind_icon from '../../assets/icons/tailwindcss_icon.svg'
import godot_icon from '../../assets/icons/godot_icon.png'
import blender_icon from '../../assets/icons/blender_icon_64.png'

import postgres_icon from '../../assets/icons/postgres_icon.svg'
import mongodb_icon from '../../assets/icons/mongodb_icon.svg'
import firestore_icon from '../../assets/icons/firestore_icon.png'

function IconsBar () {
    return (
        <div className='flex flex-row'>
            <div className='flex h-18 bg-white rounded-xl p-2 mr-4'>
                <img src={javascript_icon} className='h-full mx-2' data-tooltip-id="js-tooltip" />
                    <ReactTooltip
                        id="js-tooltip"
                        place="bottom"
                        content="JavaScript"
                    />

                <img src={typescript_icon} className='h-full mx-2' data-tooltip-id="typescript-tooltip" />
                    <ReactTooltip
                        id="typescript-tooltip"
                        place="bottom"
                        content="TypeScript"
                    />

                <img src={nodejs_icon} className='h-full mx-2' data-tooltip-id="nodejs-tooltip" />
                    <ReactTooltip
                        id="nodejs-tooltip"
                        place="bottom"
                        content="Node.js"
                    />
                <img src={jest_icon} className='h-full mx-2' data-tooltip-id="jest-tooltip" />
                    <ReactTooltip
                        id="jest-tooltip"
                        place="bottom"
                        content="Jest testing framework"
                    />

                <img src={git_icon} className='h-full mx-2' data-tooltip-id="git-tooltip" />
                    <ReactTooltip
                        id="git-tooltip"
                        place="bottom"
                        content="Git"
                    />

                <img src={python_icon} className='h-full mx-2' data-tooltip-id="python-tooltip" />
                    <ReactTooltip
                        id="python-tooltip"
                        place="bottom"
                        content="Python"
                    />

                <img src={react_icon} className='h-full mx-2' data-tooltip-id="react-tooltip" />
                    <ReactTooltip
                        id="react-tooltip"
                        place="bottom"
                        content="React"
                    />

                <img src={html_icon} className='h-full mx-1' data-tooltip-id="html-tooltip" />
                    <ReactTooltip
                        id="html-tooltip"
                        place="bottom"
                        content="HTML"
                    />

                <img src={css_icon} className='h-full mx-1' data-tooltip-id="css-tooltip" />
                    <ReactTooltip
                        id="css-tooltip"
                        place="bottom"
                        content="CSS"
                    />

                <img src={tailwind_icon} className='h-full scale-x-75 scale-y-90 -mx-2' data-tooltip-id="tailwind-tooltip" />
                    <ReactTooltip
                        id="tailwind-tooltip"
                        place="bottom"
                        content="Tailwind CSS"
                    />
                {/* <img src={godot_icon} className='h-full' />
                <img src={blender_icon} className='h-full mx-2' /> */}
            </div>
            
            <div className='flex h-18 bg-white rounded-xl p-2'>
                <img src={postgres_icon} className='h-full mx-2' data-tooltip-id="postgres-tooltip" />
                    <ReactTooltip
                        id="postgres-tooltip"
                        place="bottom"
                        content="PostgreSQL"
                    />

                <img src={mongodb_icon} className='h-full mx-3' data-tooltip-id="mongodb-tooltip" />
                    <ReactTooltip
                        id="mongodb-tooltip"
                        place="bottom"
                        content="MongoDB"
                    />
                
                <img src={firestore_icon} className='h-full mx-3' data-tooltip-id="firestore-tooltip" />
                    <ReactTooltip
                        id="firestore-tooltip"
                        place="bottom"
                        content="Firestore"
                    />
            </div>
        </div>
    )
}

export default IconsBar