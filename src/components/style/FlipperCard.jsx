"use-client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"


function FlipperCard ({ id, front, back, setFlipped }) {
    const [mouseOver, setMouseOver] = useState(false)

    let ref = useRef(null)
    let isInView = useInView(ref)

    return (
        <motion.div onMouseOver={() => {
            setMouseOver(true)
            setFlipped({ id: id, hasBeenFlipped: true })
        }}
            ref={ref}
            onMouseOut={() => {setMouseOver(false)}}
            className='shadow-xl'
            variants={{ 
                'hidden': {
                    opacity: 0.1
                },
                'visible': {
                    opacity: 1
                }
            }}
            initial={{ opacity: 0 }}
            animate={ isInView ? 'visible' : 'hidden'}
            transition={{ duration: 1 }}
            id={id}>
            <div
                className={`relative flex w-100 h-100 rounded-xl flippercard ${mouseOver ? 'flip' : ''}`} 
                onClick={() => { if (mouseOver) return }}
            >

                <div className='z-10 front rounded-xl overflow-hidden'>
                    {front}
                </div> 

                <div className='z-10 back rounded-xl overflow-hidden'>
                    {back}
                </div>

                <div className={'z-0 absolute w-full h-full rounded-xl ' +(mouseOver ? 'outline-10 bg-radial from-lime-300 to-lime-300/0 outline-lime-300 saturate-200 outline-double animate-pulsing' : '')} />
            </div>
        </motion.div>
    )
}

export default FlipperCard