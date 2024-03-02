import React from 'react'
import ticket2 from '../assets/img/ticket2.svg'
import ticket1 from '../assets/img/ticket1.svg'


const Ticket = ({ activities, events }) => {

    return (
        <div className='h-fit !flex xl:flex-row flex-col mt-[150px] item-center  justify-center items-center'>
            <div className='w-[100%] flex xl:relative z-10'>
                <div className='w-full absolute justify-center items-center text-center overflow-hidden p-16'>
                    {activities.map((activity, index) => (
                        <React.Fragment key={index}>
                            <h1 className='text-black font-bold text-2xl xl:text-4xl text-center items-center justify-center mt-4'>{activity.name}</h1>
                            <p className='text-black mt-4 text-2xl'>{activity.description}</p>
                        </React.Fragment>
                    ))}
                </div>
                <img src={ticket2} className='md:w-full w-full h-[10%]' alt="no" />
            </div>
            <div className='w-[100%] flex xl:relative z-10'>
                <div className='w-full absolute justify-center items-center text-center overflow-hidden p-16'>
                    {events.map((event, index) => (
                        <div key={index} className='w-[90%] h-fit p-8 bg-slate-50 rounded-lg flex items-center mt-5 justify-around'>
                            <div>
                                <p className='text-black m-2 text-4xl'>{event.date}</p>
                                <p className='text-black m-2 text-2xl'>{event.price}</p>
                                <p className='text-black m-2 text-lg'>{event.description}</p>
                            </div>
                            <div>
                                <button className='p-2 h-fit w-fit bg-yellow-400 hover:bg-green-300 text-black rounded-lg text-2xl font-bold'>Test</button>
                            </div>
                        </div>
                    ))}
                </div>
                <img src={ticket1} className='md:w-full w-[100%] h-fit' alt="no" />
            </div>
        </div>
    )
}

export default Ticket;