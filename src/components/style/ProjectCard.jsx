
import { useState } from "react"

function ProjectCard ({ children, face }) {
    return (
        <div className={`flex w-100 h-100 ${(face==-'front') ? 'bg-stone-100' : 'bg-radial from-zinc-700 to-zinc-800'}` }>
            { children }
        </div>
    )
}

export default ProjectCard