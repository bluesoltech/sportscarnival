import React from 'react'
import bg1 from '../assets/img/bg-1.png'
import PlayboyImg from '../assets/img/img1.png'
import Timer from '../component/Timer'

const Home = () => {
  return (
    <div>
    <div className='h-screen flex flex-row'>
      <div className='relative h-fit w-full t-0'>
        <img src={bg1} className='absolute top-0 z-[-10]' alt="" />
        <div className='xl:right-0 absolute w-[30vw]  top-[25rem] justify-end '>
          <img className='w-full h-full' src={PlayboyImg} alt="" />
        </div>
        <div className='absolute w-full h-full justify-center text-center font-bold text-[35px] bottom-[-800px] font-mono'>
          <h1>Welcome to the Summer Sports Carnival 2024!</h1>
        </div>
      </div>
    </div>
    <Timer />
    </div>
  )
}

export default Home