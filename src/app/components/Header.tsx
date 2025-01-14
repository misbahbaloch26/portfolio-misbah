'use client'
import React from 'react'
import Link from 'next/link'
import { TiThMenu } from 'react-icons/ti'
import { useState } from 'react';



const Header = () => {

  
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };
 


  return (
    <nav className="bg-transparent p-8 fixed top-0 left-0 right-0 z-10  text-black">
      <div className=" text-2xl max-w-screen-xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <Link href="/">
            Misbah <span className='text-yellow-500'>Baloch</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link href='/About-me'>
            <span className="text-white hover:text-yellow-500">About Me</span>
          </Link>
          <Link href='/projects'>
            <span className="text-white hover:text-yellow-500">Projects</span>
          </Link>
          <Link href='/contact-me'>
            <span className="text-white hover:text-yellow-500">Contact Me</span>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={toggleMenu}>
            <TiThMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link href="#about">
            <span className="text-white">About Me</span>
          </Link>
          <Link href="#projects">
            <span className="text-white">Projects</span>
          </Link>
          <Link href="#contact">
            <span className="text-white">Contact Me</span>
          </Link>
        </div>
      )}
    </nav>
  );
}








  


    
  
export default Header