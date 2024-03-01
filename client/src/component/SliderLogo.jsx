import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Disne from "../assets/img/Slider_logos/Disne.png"
// import XD from "../assets/img/Slider_logos/XD.png"
// import channel from "../assets/img/Slider_logos/Channel.png"
import marvel from "../assets/img/Slider_logos/marvel.png"
import img1 from '../assets/img/img1.png'

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
                dots: true
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
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const SliderLogo = () => {
    return (
        <div className='xl:mt-[120px] mt-[60px] p-5'>
            <h1 className='text-gray-600 text-2xl w-full xl:text-3xl mt-4 font-bold text-center '>SPORT CARNIVAL</h1>
            <p className=' text-xl leading-7 mt-10 text-gray-500 text-center my-5 md:text-[2.1rem]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
            <p className=' text-xl leading-7 mt-5 text-gray-500 text-center my-5 md:text-[2.1rem] '>From website optimization to keyword rankings we take care of every single aspect of SEO to increase your organic traffic asap.</p>
            <div className="slider-container xl:items-center mt-[]  md:mt-[100px]">
                <Slider {...settings}>
                    <div className=''>
                        <img src={marvel} className='xl:w-[100px] w-[50px] xl:h-[100px] h-[50px]' alt="no" />
                    </div>
                    <div>
                        <img src={img1} className='xl:w-[100px] w-[50px] xl:h-[100px] h-[50px] ' alt="no" />
                    </div>
                    <div>
                        <img src={marvel} className='xl:w-[100px] w-[50px] xl:h-[100px] h-[50px]' alt="no" />
                    </div>
                    <div>
                        <img src={img1} className='xl:w-[100px] w-[50px] xl:h-[100px] h-[50px]' alt="no" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SliderLogo
