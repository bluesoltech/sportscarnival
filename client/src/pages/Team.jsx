import React from 'react'
import Hero from '../component/Hero'
import Timer from '../component/Timer'
import teamimg from '../assets/img/team.png'


const Team = () => {
    return (
        <div className=" bg-white flex flex-col items-center ">
            <Hero />
            <Timer />
            <div className="">
                <img src={teamimg} className=" h-full w-full" alt="Hero" />
            </div>
        </div>
    )
}

export default Team