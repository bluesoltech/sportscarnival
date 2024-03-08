import React from "react";
import im1 from "../assets/img/slide1.jpg";
import im2 from "../assets/img/slide2.jpg";
import im3 from "../assets/img/slide3.jpg";
import im4 from "../assets/img/slide4.jpg";

const cardData = [
    {
        imgSrc: im1,
        title: '',
        description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        readMoreLink: '#'
    },
    {
        imgSrc: im2,
        title: '',
        description: 'A look into the most exciting startup acquisitions and what they mean for the industry.',
        readMoreLink: '#'
    },
    {
        imgSrc: im3,
        title: '',
        description: 'A look into the most exciting startup acquisitions and what they mean for the industry.',
        readMoreLink: '#'
    },
    {
        imgSrc: im4,
        title: '',
        description: 'A look into the most exciting startup acquisitions and what they mean for the industry.',
        readMoreLink: '#'
    }
];
function Art() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-sm justify-between mx-auto my-28">
            {cardData.map((item, index) => (
                <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto mt-5 justify-between">
                    <a href="#">
                        <img className="rounded-t-lg" src={item.imgSrc} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Art;