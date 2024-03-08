import React from "react";
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
import slide4 from "../assets/img/slide4.jpg";
import slide5 from "../assets/img/slide5.jpg";
import slide6 from "../assets/img/slide6.jpg";
import slide7 from "../assets/img/slide7.jpg";
import slide8 from "../assets/img/slide8.jpg";

const cardData = [
  {
    imgSrc: slide1,
    title: 'Mud Arts',
    description: 'A timeless blend of earth and creativity, sculpting stories and traditions from the very ground beneath our feet.',
    readMoreLink: '#'
  },
  {
    imgSrc: slide2,
    title: 'Puppet Show',
    description: 'A magical performance art that brings stories to life through the intricate manipulation of characters and narratives.',
    readMoreLink: '#'
  },
  {
    imgSrc: slide3,
    title: 'Glass Work',
    description: 'The transformative art of shaping and coloring glass to create stunning, light-infused pieces of decorative and functional beauty.',
    readMoreLink: '#'
  },
  {
    imgSrc: slide4,
    title: 'Magicun',
    description: 'A realm of enchantment and illusion, where the boundaries of reality blur, inviting audiences into a world of wonder and mystique.',
    readMoreLink: '#'
  },
  {
    imgSrc: slide3,
    title: 'Archary',
    description: 'The ancient art and sport of precision, focus, and strength, using a bow to propel arrows towards a target.',
    readMoreLink: '#'
  },
  {
    imgSrc: slide6,
    title: 'clay Art',
    description: ' A hands-on creative expression, molding raw earth into tangible forms that capture the essence of imagination and craftsmanship.',
    readMoreLink: '#'
  },
  {
    imgSrc: slide3,
    title: 'Horse Riding',
    description: ' A timeless bond between human and horse, offering a blend of adventure, grace, and a unique way to connect with nature.',
    readMoreLink: '#'
  },

];
function Art() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-sm justify-between mx-auto my-28">
      {cardData.map((item, index) => (
        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto mt-6">
          <a href="#">
            <img className="rounded-t-lg" src={item.imgSrc} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
            <a href={item.readMoreLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="ml-2 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>

  )
}

export default Art;
