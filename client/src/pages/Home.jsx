import React from 'react'
import bg1 from '../assets/img/bg-1.png'
import img1 from '../assets/img/img1.png'

const Home = () => {
  return (
    <div>
      <div style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}>
        <div></div>
      </div>
    </div>
  )
}

export default Home