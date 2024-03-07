import React, { useEffect } from 'react';

function Volunteer() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div data-tf-live="01HRC440NABCS6ASX8FT7RA9V7"></div>
  )
}

export default Volunteer;
