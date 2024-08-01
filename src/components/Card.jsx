import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,refference}) {
    return (
     <motion.div drag dragConstraints={refference} whileDrag={{scale:1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[50px] text-white py-10 px-5 overflow-hidden '>
            <FaFileAlt  />
            <p className='text-sm mt-5 font-semibold leading-tight '>{data.desc}</p>  
            <div className='footer absolute bottom-0  w-full left-0  '>
                <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h3 >{data.filesize}</h3>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center text-black'>
                    {data.close ?  <IoClose/> : <LuDownload size=".7em" color='#fff' /> }
                    
                </span>
                

            </div>
            {data.tag.isOpen && (
               <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
               <h3 className='text-sm font-semibold'><a href="https://github.com/AayushKarwa/Frammer-motion">{data.tag.tagTitle}</a></h3>
            </div>
            )}  
            
         </div>
         
    </motion.div>
    ) 
}

export default Card