import React from 'react'
import footerbg from '../assets/img/footer-bg.png'

const Footer = () => {
  return (
    <div className='relative h-screen m-0'>
      {/* <div className='!aspect-[34/7] max-h-[398px]' style={{
        backgroundImage: `url(${footerbg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      }}></div> */}
      <img src={footerbg} className='absolute bottom-0' alt="" />
    </div>
  )
}

export default Footer