"use-client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

function RevealText ({ text, delay=1, styling='' }) {
    const textArray = text.split("")

    let ref = useRef(null)
    let isInView = useInView(ref)

    return (
        <motion.p
            ref={ref}
            style={{ color: 'white' }}
            className={'text-left font-pixel_operator w-full h-full ' +styling}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: delay }}
        >
            { text }
        </motion.p >
    )
}

export default RevealText