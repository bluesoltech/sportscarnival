import React, { useEffect } from 'react';

function Contact() {
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
  }, []); // Empty dependency array means this effect will only run once

  return (
    <div data-tf-live="01HRC55MXD968DEZNX8EX0G6RB"></div>
  )
};


export default Contact;
