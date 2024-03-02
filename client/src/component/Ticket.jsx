import React, { useState } from 'react';
import ticket2 from '../assets/img/ticket2.svg';
import ticket1 from '../assets/img/ticket1.svg';

const Ticket = ({ activities, events }) => {
    const [selectedActivity, setSelectedActivity] = useState(activities[0]);

    const handleActivityClick = (activity) => {
        setSelectedActivity(activity);
    };

    return (
        <div className='h-fit flex xl:flex-row flex-col mt-[150px] item-center justify-center items-center'>
            <div className='w-full flex xl:relative z-10'>
                <div className='w-full absolute justify-center items-center text-center overflow-hidden p-16'>
                    {activities.map((activity, index) => (
                        <div key={index}>
                            <button
                                className='text-white bg-black  rounded-lg p-2 hover:text-black hover:bg-green-400 h-fit w-fit font-bold text-2xl xl:text-4xl text-center items-center justify-center mt-4 cursor-pointer'
                                onClick={() => handleActivityClick(activity)}
                            >
                                {activity.name}
                            </button>
                            <p className='text-black mt-4 text-2xl'>{activity.description}</p>
                        </div>
                    ))}
                </div>
                <img src={ticket2} className='md:w-full w-full h-[10%]' alt="no" />
            </div>
            <div className='w-full flex xl:relative z-10'>
                <div className='w-full absolute justify-center items-center text-center overflow-hidden p-16'>
                    {selectedActivity &&
                        events[selectedActivity.id - 1].dates.map((date, index) => (
                            <div key={index} className='w-[90%] h-fit p-8 bg-slate-50 rounded-lg flex items-center mt-5 justify-around'>
                                <div>
                                    <p className='text-black m-2 text-4xl'>{date}</p>
                                    <p className='text-black m-2 text-2xl'>{events[selectedActivity.id - 1].prices[index]}</p>
                                    <p className='text-black m-2 text-lg'>{events[selectedActivity.id - 1].descriptions[index]}</p>
                                </div>
                                <div>
                                    <button className='p-2 h-fit w-fit bg-yellow-400 hover:bg-green-300 text-black rounded-lg text-2xl font-bold'>Test</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <img src={ticket1} className='md:w-full w-[100%] h-fit' alt="no" />
            </div>
        </div>
    );
};

export default Ticket;
