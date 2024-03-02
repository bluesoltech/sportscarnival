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

const Team = () => {
    return (
        <>
            <Hero />
            <Timer />
            <Image sliderTexts={sliderTexts} sliderImages={sliderImages} />
        </>
    )
}

export default Team