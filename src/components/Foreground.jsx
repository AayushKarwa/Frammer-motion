import {useRef, useState} from 'react'
import React from 'react'
import Card from './Card'



function Foreground() {
    const ref = useRef(null);

const data = [{
    desc: "This is a background note and cant be selected with you.",
    filesize: ".9mb",
    close: false,
    tag:{
        isOpen: true,
        tagTitle: "Download Now!",
        tagColor: "green"
    },},{
        desc: "This is a background note and cant be selected with you.",
    filesize: ".2mb",
    close: false,
    tag:{
        isOpen: false,
        tagTitle: "Download Now!",
        tagColor: "green"
    }

    },{
        desc: "This is a background note and cant be selected with you.",
    filesize: ".7mb",
    close: true,
    tag:{
        isOpen: true,
        tagTitle: "Print!",
        tagColor: "green"
    }
    }]   
    

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
        {data.map((item,index)=>(
            <Card data = {item} refference = {ref} />
        ))}

        
    </div>
  )
}

export default Foreground