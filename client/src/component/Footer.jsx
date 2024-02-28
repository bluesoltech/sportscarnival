import React from 'react'
import footerbg from '../assets/img/footer-bg.png'

const Footer = () => {
  return (
    <div>
      <div className='' style={{
        backgroundImage: `url(${footerbg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      }}></div>
    </div>
  )
}

export default Footer