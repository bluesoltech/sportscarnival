import React from 'react'
import footerbg from '../assets/img/footer-bg.png'
import footergif from '../assets/img/footergif.gif'


const Footer = () => {
  return (
    <div className=' h-screen flex flex-col items-start justify-end'>

      <div className='relative z-0  '>
        <div className='absolute top-[-170px] z-10 rotate-[5deg]'>
          <img src="/mousecyclegig.gif" className='w-[40%]' />
        </div>
        <img src={footerbg} className='h-[100%]' alt="no" />
      </div>
    </div>

  )
}

export default Footer