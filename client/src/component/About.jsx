import React from 'react'
import about1 from '../assets/img/about1.png'
import about2 from '../assets/img/about2.png'
import res from '../assets/img/res.png'




const About = () => {
    return (
        <div className='h-fit !flex !md:flex-row !flex-col mt-[150px]'>
            <div className='w-[100%] h-[10%] flex xl:relative z-10'>
                <div className='xl:w-[30%] text-[20px] lg:w-[20%] absolute justify-center items-center text-center xl:ml-[12rem] xl:mt-[12rem] md:text-[25px] mt-[rem] p-[10px]'>
                    <h1 className='text-white font-bold text-2xl xl:text-3xl text-center items-center justify-center mb-5'>
                        Your Text Here
                    </h1>
                    <p className='text-white'>
                        The Summer Sports Carnival is an annual event that brings together athletes families, and sports enthusiasts from all over.
                        Our mission is to promote a healthy and active lifestyle while fostering a sense of community. With a variety of sports and activities, we aim to provide
                        an inclusive and enjoyable experience for participants of all ages.
                    </p>
                </div>
                <img src={about1} className='md:w-[50%] w-full h-[30%]' alt="no" />
            </div>
            <div className='md:absolute flex items-end justify-end right-0 z-2'>
                <img src={res} className='block md:hidden md:w-[70%] w-full h-[100%] md:rotate-10' alt="no" />
                <img src={about2} className='hidden md:block md:w-[70%] w-full h-[100%] md:rotate-10' alt="no" />
            </div>
        </div>
    );
}

export default About