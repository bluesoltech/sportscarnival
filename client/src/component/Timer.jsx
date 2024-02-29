import React from 'react'

const Timer = () => {
    return (
        <div>
            <div className=' w-full h-fit p-[100px] text-white text-center font-pompiere bg-black flex xl:flex-row flex-col items-center justify-between '>
                <div className='w-fit h-[20%] p-9'>
                    <h1 className='tracking-wider'>NEXT<br /> SPORT CARNOIVAL</h1>
                </div>
                <div className='w-fit h-[20%] p-9'>
                    <h1 className='tracking-wider'><span class="material-symbols-outlined text-red-800 text-4xl">location_on</span>TO BE ANNOWTATE <br /> SOON</h1>
                </div>
                <div className='w-fit h-fit p-4 rounded text-xl font-bold bg-amber-200 tracking-wider'>
                    <div className='flex md:flex-row flex-col justify-around text-black  items-center text-center h-full'>
                        <div className='p-5'>
                            <h1>00</h1>
                            <p>Days</p>
                        </div>
                        <div className='p-5'>
                            <h1>00</h1>
                            <p>Hours</p>
                        </div>
                        <div className='p-5'>
                            <h1>00</h1>
                            <p>Minutes</p>
                        </div>
                        <div className='p-5'>
                            <h1>00</h1>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
                <div className='w-fit h-[20%] items-center pt-[7px] '>
                    <button className='w-[160px] h-[60px] rounded bg-blue-600 tracking-wider'>BOOK PASSES !</button>
                </div>
            </div></div>
    )
}

export default Timer