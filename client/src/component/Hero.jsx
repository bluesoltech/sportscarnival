import React from 'react'
import home from '../assets/img/home.png'


const Hero = () => {
    return (
        <div>
            <div className='reltive'>
                <div className='h-fit w-screen t-0 absoute'>
                    <img src={home} className=' top-0 h-[800px] w-screen' alt="" />
                </div>
                <div className=''>
                    <h1 className='text-[1.1rem] leading-10 mt-5 text-Black font-bold text-center my-5 md:text-[2.5rem] mb-[100px]'>Welcome to the Summer Sports Carnival 2024!</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero