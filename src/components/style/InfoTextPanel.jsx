"use-client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

function InfoTextPanel ({ text, styling='', hasBeenFlipped=false }) {
    let textArray = text.split("")

    let ref = useRef(null)
    let isInView = useInView(ref)

    return (
        <div className={'flex w-60 bg-zinc-900 outline-1 outline-zinc-700 rounded-sm p-3 overflow-hidden ' +(styling ? styling : '')}>
            <motion.p
                ref={ref}
                style={{ color: 'white' }}
                className='text-left font-pixel_operator w-full h-full'
                variants={{
                    visible: {opacity: hasBeenFlipped ? 1 : 0}, hidden: {opacity: 0}
                }}
                transition={{ staggerChildren: 0.02 }}
                initial={{ opacity: 0 }}
            >
                { textArray.map((char, index) => {
                    return <motion.span
                        key={char+index}
                        className='' 
                        transition={{ duration: 0 }}
                        initial={{ opacity: 0 }}
                        variants={{ 
                            visible: { opacity: hasBeenFlipped ? 1 : 0 }, hidden: { opacity: 0 }
                        }}
                    >
                        {char}
                    </motion.span >
                }) }
            </motion.p >
        </div>
    )
}

export default InfoTextPanel