import React from 'react'
import about1 from '../assets/img/about1.png'
import about2 from '../assets/img/about2.png'



const About = () => {
    return (
        <div className='h- fit !flex !xl:flex-row !flex-col'>
            <div className='w-[100%] h-[10%] relative z-10'>
                <div className='w-[30%] absolute top-[100px] text-center'>
                    <h1 className='text-white font-bold text-4xl'>Your Text Here</h1>
                    <p className=' text-white'>The Summer Sports Carnival is an annual event that brings together athletes families, and sports enthusiasts from all over. Our  mission is to promote a healthy and active lifestyle  while fostering a sense of community. With  a variety of sports and activities, we aim to provide  an inclusive  and enjoyable experience for participants of  all ages.</p>
                </div>
                <img src={about1} className='w-[50%] h-[30%] ' alt="no" />
            </div>
            <div className='absolute  flex items-end justify-end right-0 z-2'>
                <img src={about2} className='w-[70%] h-[100%] rotate-10' alt="no" />
            </div>
        </div>
    )
}

export default About