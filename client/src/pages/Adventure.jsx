import React from 'react'
import CLIMBING0WALL from "../assets/ADVENTURES/CLIMBING WALL.jpg"
import COMMANDO0NET from "../assets/ADVENTURES/COMMANDO NET.jpg"
import CROSSN0STEP from "../assets/ADVENTURES/CROSSN STEP.jpg"
import HANGING0TURE from "../assets/ADVENTURES/HANGING TURE.jpg"
import LADDER0CLIMING from "../assets/ADVENTURES/LADDER CLIMING.jpg"
import NET0WORKING from "../assets/ADVENTURES/NET WORKING.jpg"
import ZIPLINE from "../assets/ADVENTURES/ZIPLINE.jpg"


const cardData = [
  {
    imgSrc: CLIMBING0WALL, // Replace with actual image path or URL
    title: 'Climbing Wall',
    description: 'A vertical challenge that tests strength, endurance, and strategy, simulating the thrill of rock climbing in a controlled environment.',
    readMoreLink: '#'
  },
  {
    imgSrc: ZIPLINE,
    title: 'Zipline',
    description: 'An exhilarating aerial ride that propels adventurers across landscapes, offering breathtaking views and a rush of adrenaline.',
    readMoreLink: '#'
  },
  {
    imgSrc: LADDER0CLIMING,
    title: 'Ladder Climing',
    description: 'A test of agility and strength, where participants ascend to new heights, challenging their limits and perseverance.',
    readMoreLink: '#'
  },
  {
    imgSrc: COMMANDO0NET,
    title: 'Commando Net',
    description: 'A rigorous outdoor obstacle that demands physical strength and mental resilience, simulating a training exercise for elite forces.',
    readMoreLink: '#'
  },
  {
    imgSrc: CROSSN0STEP,
    title: 'Cross Step',
    description: 'A strategic movement technique enhancing balance and coordination, often integrated into fitness regimes and dance choreographies.',
    readMoreLink: '#'
  },
  {
    imgSrc: HANGING0TURE,
    title: 'Hanging Ture',
    description: 'A dynamic obstacle that swings and challenges stability, demanding agility and strength for successful navigation.',
    readMoreLink: '#'
  },
  {
    imgSrc: NET0WORKING,
    title: 'Net Working',
    description: 'Building and nurturing professional and social connections to exchange information, ideas, and opportunities for mutual benefit.',
    readMoreLink: '#'
  },
];

const Adventure = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-sm justify-between mx-auto my-28">
      {cardData.map((item, index) => (
        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto mt-5">
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

export default Adventure