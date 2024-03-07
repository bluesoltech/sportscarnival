import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import video2 from '../assets/img/video2.svg'
import slide1 from '../assets/img/slide1.jpg'
import slide2 from '../assets/img/slide2.jpg'
import slide3 from '../assets/img/slide3.jpg'
import slide4 from '../assets/img/slide4.jpg'
import slide5 from '../assets/img/slide5.jpg'
import slide6 from '../assets/img/slide6.jpg'
import slide7 from '../assets/img/slide7.jpg'
import slide8 from '../assets/img/slide8.jpg'





// Your data array
const data = [
    {
        imgSrc: slide1,
        content: "Content 1",
    },
    {
        imgSrc: slide2,
        content: "Content 2",
    },
    {
        imgSrc: slide3,
        content: "Content 2",
    },
    {
        imgSrc: slide4,
        content: "Content 2",
    },
    {
        imgSrc: slide5,
        content: "Content 2",
    },
    {
        imgSrc: slide6,
        content: "Content 2",
    },
    {
        imgSrc: slide7,
        content: "Content 2",
    },
    {
        imgSrc: slide8,
        content: "Content 2",
    },
];

// React Slick settings
var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    spaceBetween: 32, // Space between slides in px
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const MyComponent = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Adjust this value as needed for your breakpoint
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='relative w-full mt-[100px]'>
            <div className='absolute top-0 left-0 w-full h-full z-0 items-center justify-center'>
                <img src={video2} className='w-full h-auto object-cover' alt="Background" />
            </div>
            <div className='relative z-10 p-10'>
                {isMobile ? (
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index} className='relative overflow-hidden w-[300px] h-[300px] mx-4 my-4 border-2 border-black rounded-lg flex items-center justify-center'>
                                <img src={item.imgSrc} className='h-full w-full object-cover' alt={item.alt} />
                                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-gray-800 bg-opacity-75 flex items-center justify-center text-white">
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-sm justify-between mt-11 mx-auto'>
                        {data.map((item, index) => (
                            <div key={index} className='relative overflow-hidden w-[250px] h-[280px] item-center border-4 border-black rounded-lg mx-auto my-4' >
                                <img src={item.imgSrc} className=' h-full w-full' alt="no" />
                                <div className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100 bg-gray-800 bg-opacity-75 text-white flex justify-center items-center">
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyComponent;
