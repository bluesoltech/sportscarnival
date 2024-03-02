import React from 'react'
import Hero from '../component/Hero'
import Timer from '../component/Timer'
import Ticket from '../component/Ticket'
import SliderLogo from '../component/SliderLogo';
import Image from '../component/Image';
import img22 from '../assets/img/img22.png'

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