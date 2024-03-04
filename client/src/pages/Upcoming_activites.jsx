import React from 'react'
import Hero from '../component/Hero'
import Timer from '../component/Timer'
import Ticket from '../component/Ticket'
import SliderLogo from '../component/SliderLogo';
import Image from '../component/Image';
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
      { id: 1, name: 'Activity 1', description: 'Description for Activity 1' },
      { id: 2, name: 'Activity 2', description: 'Description for Activity 2' },
      { id: 3, name: 'Activity 3', description: 'Description for Activity 3' },
    ];
  
    const events = [
  
      {
        id: 1,
        dates: ['Event 1 Date 1', 'Event 1 Date 2', 'Event 1 Date 3'],
        prices: ['Event 1 Price 1', 'Event 1 Price 2', 'Event 1 Price 3'],
        descriptions: ['Event 1 Description 1', 'Event 1 Description 2', 'Event 1 Description 3']
      },
      {
        id: 2,
        dates: ['Event 2 Date 2', 'Event 1 Date 2', 'Event 1 Date 3'],
        prices: ['Event 1 Price 1', 'Event 1 Price 2', 'Event 1 Price 3'],
        descriptions: ['Event 1 Description 1', 'Event 1 Description 2', 'Event 1 Description 3']
      },
      {
        id: 3,
        dates: ['Event 3 Date 3', 'Event 1 Date 2', 'Event 1 Date 3'],
        prices: ['Event 1 Price 1', 'Event 1 Price 2', 'Event 1 Price 3'],
        descriptions: ['Event 1 Description 1', 'Event 1 Description 2', 'Event 1 Description 3']
      },
    ];

const Upcoming_activites = () => {
    return (
        <>
            <Hero />
            <Timer />
            <Ticket activities={activities} events={events} />
            <SliderLogo/>
            <Image sliderTexts={sliderTexts} sliderImages={sliderImages} />

        </>
    )
}

export default Upcoming_activites