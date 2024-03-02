import React from 'react'
import videobg from '../assets/img/videobg.svg'
import img22 from '../assets/img/img22.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Image = ({ sliderTexts, sliderImages }) => {
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
    var settings1 = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        arrows: false
    };
    return (
        <div className=' w-full mt-[100px]'>
            <div className=' relative'>
`                <div className='w-full absolute top-0 p-16 item-center justify-center'>
`                    <div className="slider-container relative">
                        <Slider {...settings}>
                            {sliderImages.map((image, index) => (
                                <div key={index}>
                                    <div className={`overflow-hidden w-[100px] xl:w-[250px] h-[100px] xl:h-[280px] item-center border-2 border-black rounded-lg p-2 ${image.bgColor}`}>
                                        <img src={image.imgUrl} className='rounded-lg h-full' alt="no" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        
                    </div>
                </div>
                <div className='w-full absolute top-0 mt-[500px] item-end justify-end'>
                    <div className="slider-container relative">
                        <div className='w-[50%] justify-center'>
                            <Slider {...settings1}>
                                {sliderTexts.map((text, index) => (
                                    <div key={index}>
                                        <h1 className='item-center justify-center text-center'>{text}</h1>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <img src={videobg} className='w-screen' alt="no" />
            </div>
        </div>
    )
}

export default Image