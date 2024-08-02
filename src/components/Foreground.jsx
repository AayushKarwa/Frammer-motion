import {useRef, useState} from 'react'
import React from 'react'
import Card from './Card'



function Foreground() {
    const ref = useRef(null);

const data = [{
    desc: "Which is better javascript or Typescript? huhh!",
    filesize: ".9mb",
    close: false,
    tag:{
        isOpen: true,
        tagTitle: "Download Now!",
        tagColor: "green"
    },},{
        desc: "The future is all about Web3",
    filesize: ".2mb",
    close: false,
    tag:{
        isOpen: false,
        tagTitle: "Download Now!",
        tagColor: "green"
    }

    },{
        desc: "Why the need for centralised exchange if we have decentralisation",
    filesize: ".7mb",
    close: true,
    tag:{
        isOpen: true,
        tagTitle: "Print!",
        tagColor: "green"
    }
    },{
        desc: "To get the rust syntax is a pain in the ass.",
        filesize: ".9mb",
        close: false,
        tag:{
            isOpen: true,
            tagTitle: "Download Now!",
            tagColor: "green"
        },},{
            desc: "If you would have to buy a cryto which one it would be?? obvio ETH",
        filesize: ".2mb",
        close: false,
        tag:{
            isOpen: false,
            tagTitle: "Download Now!",
            tagColor: "green"
        }
    
        },{
            desc: "Web2 or Web3? buddyy Web 2.0 + Web 3.0!",
        filesize: ".7mb",
        close: true,
        tag:{
            isOpen: true,
            tagTitle: "Print!",
            tagColor: "green"
        }
        }]   
    

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item,index)=>(
            <Card data = {item} refference = {ref} />
        ))}

        
    </div>
  )
}

export default Foreground