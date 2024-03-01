import React from 'react'
import videobg from '../assets/img/videobg.svg'
import img22 from '../assets/img/img22.png'
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        arrows: false
    };
    return (
        <div className=' w-full mt-[100px]'>
            <div className=' relative'>
                <div className='w-full absolute top-0 p-16'>
                    <div className="slider-container relative">
                        <Slider {...settings}>
                            <div className=''>
                                <img src={img22} className='w-[100px] xl:w-[150px] h-[100px] xl:h-[180px]' alt="no" />
                            </div>
                            <div>
                                <img src={img22} className='w-[100px] xl:w-[150px] h-[100px] xl:h-[180px]' alt="no" />
                            </div>
                            <div>
                                <img src={img22} className='w-[100px] xl:w-[150px] h-[100px] xl:h-[180px]' alt="no" />
                            </div>
                            <div>
                                <img src={img22} className='w-[100px] xl:w-[150px] h-[100px] xl:h-[180px]' alt="no" />
                            </div>
                            <div>
                                <img src={img22} className='w-[100px] xl:w-[150px] h-[100px] xl:h-[180px]' alt="no" />
                            </div>
                            <div>
                                <img src={img22} className='w-[100px] xl:w-[150px] h-[100px] xl:h-[180px]' alt="no" />
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