"use client"
import { motion } from "motion/react"

function ScrollingBar () {
    return (
        <motion.div 
            className='grid place-items-center gap-x-20 gap-y-100 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 
                bg-zinc-300 px-16 
                h-140 py-10 -mr-8 w-screen overflow-y-scroll'
            onScroll={(e) => {handleScroll(e)}}
        >

        </motion.div >     
    )
       
}
