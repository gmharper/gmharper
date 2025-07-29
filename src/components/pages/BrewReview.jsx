
"use-client"

// IMPORTS
import { useEffect } from "react"
import { Link } from "react-router"
import { motion } from "framer-motion"

import br_video from '../../assets/video/br-video.mp4'

// COMPONENTS
import PersonCard from "../BrewReview/PersonCard"
import { BoxLabel } from "../style/index"

const group_members = [
    {
        name: 'MORGAN HEWITT',
        linkedIn: 'https://www.linkedin.com/in/morgan-hewitt-8a68041ab/',
        github: 'https://github.com/loafdimension'
    },
    {
        name: 'SAM JOY',
        linkedIn: 'https://www.linkedin.com/in/sam-joy1/',
        github: 'https://github.com/samjoy1',
    },
    {
        name: 'Manuel González',
        linkedIn: 'https://www.linkedin.com/in/manuel-gonzalez-caldas/',
        github: 'https://github.com/manuelgcl25'
    },
    {
        name: 'Katherin Bennett',
        linkedIn: 'https://www.linkedin.com/in/katherinbennett/',
        github: 'https://github.com/katybennett'
    },
    {
        name: 'Nicole Raymond',
        linkedIn: 'https://www.linkedin.com/in/nicole-raymond-b70007188/',
        github: 'https://github.com/niicraymond'
    }
]

function BrewReview () {
    return (
        <div className='flex-col'>
            <div className='flex-row'>
                <div className='flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <video src={br_video} className='scale-180 h-100' autoPlay={true} loop={true} muted={true} />
                    </div>
                    <BoxLabel text={'DEMO VIDEO'} />
                </div>

                <div className='rounded-xl overflow-hidden'>
                    <BoxLabel text={'WIREFRAMES'} />
                </div>
            </div>

            <div className='flex-col bg-blue'>
                <h3>Made in Collaboration with:</h3>
                <PersonCard person={group_members[0]}/>
                <PersonCard person={group_members[1]}/>
                <PersonCard person={group_members[2]}/>
                <PersonCard person={group_members[3]}/>
                <PersonCard person={group_members[4]}/>
            </div>
        </div>
    )
}

export default BrewReview