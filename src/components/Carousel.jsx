import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";


const Carousel = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }

  return (
    <div className='h-screen w-full sm:w-9/10 mx-auto rounded-2xl overflow-hidden relative text-gray-500/50 group'>
      <div className='w-full h-full bg-center bg-cover duration-500' style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
      
      {/*  */}
      <div className='absolute top-1/2 left-1 transform -translate-y-1/2 cursor-pointer hover:text-white 
      transition-all duration-300 hidden group-hover:block'>
        <IoIosArrowBack size={40} onClick={handlePrevious} />
      </div>
      <div className='absolute top-1/2 right-1 transform -translate-y-1/2 cursor-pointer hover:text-white 
      transition-all duration-300 hidden group-hover:block'>
        <IoIosArrowForward size={40} onClick={handleNext} />
      </div>
    </div>
  )
}

export default Carousel