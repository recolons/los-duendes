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
    <div className='h-screen w-full sm:w-9/10 mx-auto rounded-2xl overflow-hidden relative text-white/50 group'>
      {/* slide image */}
      <div className='w-full h-full bg-center bg-cover duration-500' style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
      
      {/* back arrow */}
      <div className='absolute top-1/2 left-1 transform -translate-y-1/2 cursor-pointer hover:text-white 
      transition-all duration-300 hidden group-hover:block'>
        <IoIosArrowBack size={40} onClick={handlePrevious} />
      </div>
      {/* forward arrow */}
      <div className='absolute top-1/2 right-1 transform -translate-y-1/2 cursor-pointer hover:text-white 
      transition-all duration-300 hidden group-hover:block'>
        <IoIosArrowForward size={40} onClick={handleNext} />
      </div>
      {/* dots */}
      <div className='hidden group-hover:flex justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => setCurrentIndex(slideIndex)} className={`text-2xl cursor-pointer 
          transition-colors duration-300 ${slideIndex === currentIndex ? 'text-white' : 'text-white/50'}`}>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel