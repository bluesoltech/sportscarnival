import React, { useState, useEffect } from "react";

const Timer = () => {
  const targetDate = new Date("2024-11-31T00:00:00").getTime();

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
      const hoursRemaining = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesRemaining = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
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
      <div className=" w-screen h-fit py-2 px-5 text-white text-center font-pompiere bg-black flex md:flex-row flex-col gap-5 items-center justify-between">
        <div className="w-fit h-[20%] ">
          <h1 className="tracking-wider">
            NEXT
            <br /> SPORT CARNOIVAL
          </h1>
        </div>
        <div className="w-fit h-[20%]  flex items-center">
          <span class="material-symbols-outlined text-red-800 text-4xl">
            location_on
          </span>
          <h1 className="tracking-wider text-sm">
            TO BE ANNOUNCED <br /> SOON
          </h1>
        </div>
        <div className="w-fit h-fit px-4 py-1 rounded text-xl font-bold bg-amber-200 tracking-wider">
          <div className="flex md:flex-row flex-col justify-around text-black items-center text-center h-full">
            <div className="p-2">
              <h1 className="micro-5-regular text-3xl">
                {days < 10 ? `0${days}` : days}
              </h1>
              <p className="text-sm text-gray-800">Days</p>
            </div>
            <div className="p-2">
              <h1 className="micro-5-regular text-3xl">
                {hours < 10 ? `0${hours}` : hours}
              </h1>
              <p className="text-sm text-gray-800">Hours</p>
            </div>
            <div className="p-2">
              <h1 className="micro-5-regular text-3xl">
                {minutes < 10 ? `0${minutes}` : minutes}
              </h1>
              <p className="text-sm text-gray-800">Minutes</p>
            </div>
            <div className="p-2">
              <h1 className="micro-5-regular text-3xl">
                {seconds < 10 ? `0${seconds}` : seconds}
              </h1>
              <p className="text-sm text-gray-800">Seconds</p>
            </div>
          </div>
        </div>
        <div className="w-fit h-[20%] items-center pt-[7px] ">
          <button className="w-fit xl:w-[160px] p-2 h-fit xl:h-[60px] rounded bg-blue-500 hover:bg-blue-700 tracking-wider">
            BOOK PASSES !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
