import React from 'react'
import bg1 from '../assets/img/bg-1.png'
import img1 from '../assets/img/img1.png'
import About from '../component/About'
import home from '../assets/img/home.png'
import Image from '../component/Image'


const Home = () => {
  return (
    <>
      <div className='h-fit w-full t-0'>
        <div className=' '>
          <img src={home} className=' top-0 w-screen' alt="" />
        </div>

      </div>
      <About />
      <Image />
    </>

  )
}

export default Home