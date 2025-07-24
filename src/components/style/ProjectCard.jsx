
import { useState } from "react"

function ProjectCard ({ children, face }) {
    return (
        <div className={`flex w-100 h-100 ${(face==-'front') ? 'bg-stone-100' : 'bg-radial from-zinc-800 to-zinc-900'}` }>
            { children }
        </div>
    )
}

export default ProjectCard