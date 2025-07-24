// IMPORTS


// COMPONENTS
import PersonCard from "../BrewReview/PersonCard"

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
        <div>
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