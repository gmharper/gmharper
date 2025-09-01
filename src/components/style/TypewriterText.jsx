"use-client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

function TypewriterText ({ text, speed=50, styling='' }) {
    const textArray = text.split("")

    let ref = useRef(null)
    let isInView = useInView(ref)

    return (
        <motion.p
            ref={ref}
            style={{ color: 'white' }}
            className={'text-left font-pixel_operator w-full h-full ' +styling}
            variants={{
                visible: {opacity: 1}, hidden: {opacity: 0}
            }}
            transition={{ staggerChildren: 1/speed }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            { textArray.map((char, index) => {
                return <motion.span
                    key={char+index}
                    className='' 
                    transition={{ duration: 0 }}
                    initial={{ opacity: 0 }}
                    variants={{ 
                        visible: { opacity: 1 }, hidden: { opacity: 0 }
                    }}
                    animate={{ opacity: 1 }}
                >
                    {char}
                </motion.span >
            }) }
        </motion.p >
    )
}

export default TypewriterText