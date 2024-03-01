import React from 'react'
import bg1 from '../assets/img/bg-1.png'
import img1 from '../assets/img/img1.png'
import About from '../component/About'
import home from '../assets/img/home.png'
import Image from '../component/Image'
import Timer from '../component/Timer'
import Ticket from '../component/Ticket'
import SliderLogo from '../component/SliderLogo'


const Home = () => {
  return (
    <>
      <div className='reltive'>
        <div className='h-fit w-full t-0 absoute'>
          <img src={home} className=' top-0 h-[800px] w-screen' alt="" />
        </div>
        <div className=''>
          <h1 className='text-center top-[-4px]'>huigytiuj</h1>
        </div>
      </div>
      <Timer />
      <About />
     <SliderLogo/>
      <Image />
      <Ticket/>
    </>

  )
}

export default Home