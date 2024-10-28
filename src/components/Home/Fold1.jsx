import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom';
import { IoMdDownload } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const Fold1 = () => {
  

  return (
    <div className='hero min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-32 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 flex flex-col justify-center'>
        <h1 className='text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20'>
            <span className='block'>Discover Your Investments</span>
            <span className='block'>See Them All In One Place</span>
            <span className='block'>Secure Your Future</span>
        </h1>
        <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl '>
            Vealthx lets you aggregate investments, secure them into your account, make dynamic wills, update nominees, and much more
        </p>
        <div className='bg-white text-black font-bold py-4 px-6 w-fit rounded-full text-xl mt-10 hover:bg-gray-200 transition-colors'>
          <Link to='/download'>Download the App <IoMdDownload className='inline w-7 h-7 ml-6'/> </Link>
        </div>
    </div>
  )
}

export default Fold1
