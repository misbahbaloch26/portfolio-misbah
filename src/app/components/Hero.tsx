import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div>
   
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1675859364880-198e17c9376a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D)' }} 
    >
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div> {/**dark overly */}

      <div className="relative z-10 flex items-center justify-center h-full">

        <div className="text-center text-white">
        
          <h1 className="sm:text-3xl text-5xl font-medium title-font mb-4 text-white">
          Hello, I&apos;m Misbah Baloch, a Frontend Web Developer
          </h1>
         
          <p className="text-lg">Feel free to explore my work and get in touch!</p>
          <Link href={'contact-me'}>
            <button className='bg-yellow-600 text-white hover:bg-[#070524] p-3 mt-5 rounded-md'>lets get connected!</button>
            </Link>
        </div>
      </div>
    </section>



    </div>
  )
}

export default Hero