import React, { useEffect, useRef } from 'react';
import ticket1 from '../assets/img/ticket1.svg'
import ticket2 from '../assets/img/ticket2.svg'


const Ticket = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Define a new path:
        ctx.beginPath();

        // Define a start point
        ctx.moveTo(20,20);

        // Define points
        ctx.lineTo(100,20);
        ctx.lineTo(175,100);
        ctx.lineTo(20,100);
        ctx.lineTo(20,20);

        // Fill shape with red color
        ctx.fillStyle = "red";
        ctx.fill();

        // Draw it
        ctx.stroke();
    }, []);
    return (
        // <div className='h-fit !flex !md:flex-row !flex-col mt-[150px]'>
        //     <div className='w-[100%] flex xl:relative z-10'>
        //         <div className='w-[0%] absolute justify-center items-center text-center overflow-hidden'>
        //             <h1 className='text-white font-bold text-2xl xl:text-4xl text-center items-center justify-center'>Your Text Here</h1>
        //             <p className=' text-white'>The Summer Sports Carnival is an annual event that brings together athletes families, and sports enthusiasts from all over. Our  mission is to promote a healthy and active lifestyle  while fostering a sense of community. With  a variety of sports and activities, we aim to provide  an inclusive  and enjoyable experience for participants of  all ages.</p>
        //         </div>
        //         <img src={ticket2} className='md:w-[50%] w-full h-fit' alt="no" />
        //     </div>
        //     <div className='md:absolute flex items-end justify-end right-0 w-full '>
        //         <img src={ticket1} className='md:w-[50%] w-full h-auto ' alt="no" />
        //     </div>
        // </div>
        <div className='flex'>
            <canvas
                ref={canvasRef}
            />
             <canvas
                ref={canvasRef}
            />
        </div>
    )
}

export default Ticket
