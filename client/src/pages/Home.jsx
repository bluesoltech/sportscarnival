import React from 'react'
import bg1 from '../assets/img/bg-1.png'
import img1 from '../assets/img/img1.png'
import About from '../component/About'
import home from '../assets/img/home.png'
import Image from '../component/Image'
import Timer from '../component/Timer'
import Ticket from '../component/Ticket'
import SliderLogo from '../component/SliderLogo'
import img22 from '../assets/img/img22.png'

const sliderTexts = [
  'Bansi',
  'Bansi',
  'Bansi',
  'Bansi',
  'Bansi',
  'Bansi'
];
const sliderImages = [
  { imgUrl: img22, bgColor: 'bg-red-600' },
  { imgUrl: img22, bgColor: 'bg-yellow-600' },
  { imgUrl: img22, bgColor: 'bg-green-600' },
  { imgUrl: img22, bgColor: 'bg-blue-600' },
  { imgUrl: img22, bgColor: 'bg-pink-600' },
  { imgUrl: img22, bgColor: 'bg-purple-600' }
];
const activities = [
  {
      name: 'Activity 1',
      description: 'The Summer Sports Carnival is an annual event that brings together athletes families, and sports enthusiasts from all over. Our mission is to promote a healthy and active lifestyle while fostering a sense of community. With a variety of sports and activities, we aim to provide an inclusive and enjoyable experience for participants of all ages.'
  },
  {
      name: 'Activity 2',
      description: 'The Summer Sports Carnival is an annual event that brings together athletes families, and sports enthusiasts from all over. Our mission is to promote a healthy and active lifestyle while fostering a sense of community. With a variety of sports and activities, we aim to provide an inclusive and enjoyable experience for participants of all ages.'
  },
  {
      name: 'Activity 3',
      description: 'The Summer Sports Carnival is an annual event that brings together athletes families, and sports enthusiasts from all over. Our mission is to promote a healthy and active lifestyle while fostering a sense of community. With a variety of sports and activities, we aim to provide an inclusive and enjoyable experience for participants of all ages.'
  },
  {
      name: 'Activity 4',
      description: 'The Summer Sports Carnival is an annual event that brings together athletes families, and sports enthusiasts from all over. Our mission is to promote a healthy and active lifestyle while fostering a sense of community. With a variety of sports and activities, we aim to provide an inclusive and enjoyable experience for participants of all ages.'
  }
];
const events = [
  {
      date: '6 April - Saturday',
      price: 'Rs.499',
      description: 'Applicable to kids only. Accompanying parents’ entry is free.'
  },
  {
      date: '7 April - Sunday',
      price: 'Rs.599',
      description: 'Applicable to adults. Children under 12 enter free.'
  },
  {
      date: '8 April - Monday',
      price: 'Rs.399',
      description: 'Special discount for seniors. Free entry for children under 5.'
  },

  // Add more event objects as needed
];

const Home = () => {
  return (
    <>
      <div className='reltive'>
        <div className='h-fit w-full t-0 absoute'>
          <img src={home} className=' top-0 h-[800px] w-screen' alt="" />
        </div>
        <div className=''>
          <h1 className='text-[1.1rem] leading-10 mt-5 text-Black font-bold text-center my-5 md:text-[2.5rem] mb-[100px]'>Welcome to the Summer Sports Carnival 2024!</h1>
        </div>
      </div>
      <Timer />
      <About />
      <SliderLogo />
      <Image sliderTexts={sliderTexts} sliderImages={sliderImages} />
      <Ticket activities={activities} events={events}/>
    </>

  )
}

export default Home