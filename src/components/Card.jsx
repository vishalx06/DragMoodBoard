import React from 'react'
import { FaRegNoteSticky } from "react-icons/fa6";
import { GoSmiley } from "react-icons/go";
import { PiSmileySadBold } from "react-icons/pi";
import { motion } from "framer-motion"




function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className='relative w-60 h-60 rounded-[40px] bg-zinc-900/90 text-white py-6 px-8 overflow-hidden'>
        <FaRegNoteSticky />
        <p className='text-sm mt-5 leading-tight font-semibold'> {data.desc}</p>
        <div className='footer absolute bottom-0 bg-orange-400 w-full h-[40px] left-0'>
            <div className='flex items-center justify-center mb-3 px-8 py-2'>
                <h5>{data.mood}</h5>
                {data.goodmood ? <GoSmiley /> : <PiSmileySadBold />}
            </div>
        </div>
    </motion.div>
  )
}

export default Card