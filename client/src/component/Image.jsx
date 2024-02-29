import React from 'react'
import videobg from '../assets/img/videobg.png'
import about2 from '../assets/img/about2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Image = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
    return (
        <div className='h-fit w-full mt-[100px]'>
            <div className='w-[100%] relative z-10'>
                <div className='w-full absolute top-[100px] text-center p-16'>
                    <div className="slider-container relative mt-[80px]">
                        <Slider {...settings}>
                            <div className=''>
                                <img src={about2} className='w-[120px] h-[150px]' alt="no" />
                            </div>
                            <div>
                                <img src={about2} className='w-[120px] h-[150px]' alt="no" />
                            </div>
                            <div>
                                <img src={about2} className='w-[120px] h-[150px]' alt="no" />
                            </div>
                            <div>
                                <img src={about2} className='w-[120px] h-[150px]' alt="no" />
                            </div>
                            <div>
                                <img src={about2} className='w-[120px] h-[150px]' alt="no" />
                            </div>
                            <div>
                                <img src={about2} className='w-[120px] h-[150px]' alt="no" />
                            </div>
                        </Slider>
                    </div>
                </div>
                <img src={videobg} className='w-screen' alt="no" />
            </div>
        </div>
    )
}

export default Image