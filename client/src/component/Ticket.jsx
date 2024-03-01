import React from 'react'

const Ticket = () => {

    return (
        <div className='h-fit !flex xl:flex-row flex-col mt-[150px] item-center  justify-center items-center'>
            <div className='w-[100%] flex xl:relative z-10'>
                <div className='w-full absolute justify-center items-center text-center overflow-hidden p-16'>
                    <h1 className='text-black font-bold text-2xl xl:text-4xl text-center items-center justify-center mt-4'>ACTIVITES NAME </h1>
                    <p className=' text-black mt-4 text-2xl'>The Summer Sports Carnival is an annual event that brings together athletes families, and sports enthusiasts from all over. Our  mission is to promote a healthy and active lifestyle  while fostering a sense of community. With  a variety of sports and activities, we aim to provide  an inclusive  and enjoyable experience for participants of  all ages.</p>
                    <h1 className='text-black font-bold text-2xl xl:text-4xl text-center items-center justify-center mt-4'>ACTIVITES NAME </h1>
                    <p className=' text-black mt-4 text-2xl'>The Summer Sports Carnival is an annual event that brings together athletes families, and sports enthusiasts from all over. Our  mission is to promote a healthy and active lifestyle  while fostering a sense of community. With  a variety of sports and activities, we aim to provide  an inclusive  and enjoyable experience for participants of  all ages.</p>
                    <h1 className='text-black font-bold text-2xl xl:text-4xl text-center items-center justify-center mt-4'>ACTIVITES NAME </h1>
                    <p className=' text-black mt-4 text-2xl'>The Summer Sports Carnival is an annual event that brings together athletes families, and sports enthusiasts from all over. Our  mission is to promote a healthy and active lifestyle  while fostering a sense of community. With  a variety of sports and activities, we aim to provide  an inclusive  and enjoyable experience for participants of  all ages.</p>
                    <h1 className='text-black font-bold text-2xl xl:text-4xl text-center items-center justify-center mt-4'>ACTIVITES NAME </h1>
                    <p className=' text-black mt-4 text-2xl'>The Summer Sports Carnival is an annual event that brings together athletes families, and sports enthusiasts from all over. Our  mission is to promote a healthy and active lifestyle  while fostering a sense of community. With  a variety of sports and activities, we aim to provide  an inclusive  and enjoyable experience for participants of  all ages.</p>
                </div>
                <img src={ticket2} className='md:w-full w-full h-[10%]' alt="no" />
            </div>
            <div className='w-[100%] flex xl:relative z-10'>
                <div className='w-full absolute justify-center items-center text-center overflow-hidden p-16'>
                    <div className='w-[90%] h-fit p-8 bg-slate-50 rounded-lg flex items-center mt-5 justify-around'>
                        <div className=''>
                            <p className='text-black m-2 text-4xl'>6 april- saturday</p>
                            <p className='text-black m-2 text-2xl'>Rs.499</p>
                            <p className='text-black m-2 text-lg'>Applicable to kids only.accomanying  parents’ entry is free.</p>
                        </div>
                        <div className=''>
                            <button className='p-2 h-fit w-fit bg-yellow-400 hover:bg-green-300 text-black rounded-lg text-2xl font-bold'>Test</button>
                        </div>
                    </div>
                    <div className='w-[90%] h-fit p-8 bg-slate-50 rounded-lg flex items-center mt-5 justify-around'>
                        <div className=''>
                            <p className='text-black m-2 text-4xl'>6 april- saturday</p>
                            <p className='text-black m-2 text-2xl'>Rs.499</p>
                            <p className='text-black m-2 text-lg'>Applicable to kids only.accomanying  parents’ entry is free.</p>
                        </div>
                        <div className=''>
                            <button className='p-2 h-fit w-fit bg-yellow-400 text-black rounded-lg text-2xl font-bold'>Test</button>
                        </div>
                    </div>
                    <div className='w-[90%] h-fit p-8 bg-slate-50 rounded-lg flex items-center mt-5 justify-around'>
                        <div className=''>
                            <p className='text-black m-2 text-4xl'>6 april- saturday</p>
                            <p className='text-black m-2 text-2xl'>Rs.499</p>
                            <p className='text-black m-2 text-lg'>Applicable to kids only.accomanying  parents’ entry is free.</p>
                        </div>
                        <div className=''>
                            <button className='p-2 h-fit w-fit bg-yellow-400 text-black rounded-lg text-2xl font-bold'>Test</button>
                        </div>
                    </div>
                </div>
                <img src={ticket1} className='md:w-full w-[100%] h-fit' alt="no" />
            </div>
        </div>
    )
}

export default Ticket