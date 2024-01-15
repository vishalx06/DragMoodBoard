import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null)
    const data = [
        {
            desc: "DEDICATE YOURSELF TO YOUR JOB, GIVE 100%",
            mood: "MOTIVATION",
            goodmood: true
        },
        {
            desc: "Embrace each moment, celebrate your victories and keep spreading that beautiful smile. You've got this!",
            mood: "Good Mood",
            goodmood: true
        },
        {
            desc: "Just a gentle reminder: You are doing an amazing job! Your kindness, resilience, and positive spirit shine brightly.",
            mood: "Good Mood",
            goodmood: false
        }
      
    ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card data={item} reference={ref} />
        ))}

    </div>
  )
}

export default Foreground