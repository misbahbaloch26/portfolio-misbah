import React from 'react'
import Link from 'next/link'

const Aboutme = () => {
  return (
    <div>
        <section className="text-white bg-[#070524]  body-font overflow-hidden relative bg-cover bg-center ">
      
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
       
        <h1 className="text-white text-3xl title-font font-medium mb-4">
        Hello, I&apos;m Misbah Baloch, a Frontend Web Developer 
        </h1>

        <div className="flex mb-4">
         <h2 className='text-lg text-gray-500'>___Misbah Baloch</h2>
      
        </div>
        
        <p className="leading-relaxed mb-4 text-white">
        Hello, I&apos;m Misbah Baloch, a Frontend Web Developer

I specialize in creating visually stunning and user-friendly websites using the latest web technologies. 
With a passion for design and functionality, I strive to build responsive, interactive, and dynamic user experiences that
 bring ideas to life. Whether it&apos;s HTML, CSS, JavaScript, Typescript and tailwindcss or frameworks like Next.js, I&apos;m dedicated to crafting seamless 
 digital solutions.

Feel free to explore my work and get in touch!
        </p>
       <h2 className='text-lg text-white text-bold'>explore my <a href="/projects" className='text-blue-400 text-lg underline'>
       projects</a></h2>

       <Link href='/contact-me'>
       <button className='bg-yellow-600 text-white rounded-md mt-5 p-4'>contact me</button>
       </Link>
      </div>
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfc-3t9h8stlulScLLbpQvkWovY_SuFs1mPg&s"
      />
    </div>
  </div>
</section>


    </div>
  )
}

export default Aboutme