import React, { useState, useEffect } from 'react'


const Timer = () => {

    const targetDate = new Date('2024-11-31T00:00:00').getTime();

    // Initialize state variables for days, hours, minutes, and seconds
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // Update the countdown every second
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hoursRemaining = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

            // Update state variables
            setDays(daysRemaining);
            setHours(hoursRemaining);
            setMinutes(minutesRemaining);
            setSeconds(secondsRemaining);

            // If the countdown is over, clear the interval
            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [targetDate]);


    return (
        <div>
            <div className=' w-full h-fit p-[100px] text-white text-center font-pompiere bg-black flex xl:flex-row flex-col items-center justify-between'>
                <div className='w-fit h-[20%] p-9'>
                    <h1 className='tracking-wider'>NEXT<br /> SPORT CARNOIVAL</h1>
                </div>
                <div className='w-fit h-[20%] p-9'>
                    <h1 className='tracking-wider'><span class="material-symbols-outlined text-red-800 text-4xl">location_on</span>TO BE ANNOWTATE <br /> SOON</h1>
                </div>
                <div className='w-fit h-fit p-4 rounded text-xl font-bold bg-amber-200 tracking-wider'>
                    <div className='flex md:flex-row flex-col justify-around text-black items-center text-center h-full'>
                        <div className='p-5'>
                            <h1>{days < 10 ? `0${days}` : days}</h1>
                            <p>Days</p>
                        </div>
                        <div className='p-5'>
                            <h1>{hours < 10 ? `0${hours}` : hours}</h1>
                            <p>Hours</p>
                        </div>
                        <div className='p-5'>
                            <h1>{minutes < 10 ? `0${minutes}` : minutes}</h1>
                            <p>Minutes</p>
                        </div>
                        <div className='p-5'>
                            <h1>{seconds < 10 ? `0${seconds}` : seconds}</h1>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>


                <div className='w-fit h-[20%] items-center pt-[7px] '>
                    <button className='w-fit xl:w-[160px] p-2 h-fit xl:h-[60px] rounded bg-blue-600 tracking-wider'>BOOK PASSES !</button>
                </div>
            </div></div>
    )
}

export default Timer