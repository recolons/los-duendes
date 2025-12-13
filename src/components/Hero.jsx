import React from 'react'

const Hero = () => {
  return (
    // change text maybe add bg image to hero section
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='uppercase text-[#00df9a] font-bold p-2'>Private Exclusive Tours</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Come explore with us!</h1>
            <div>
                {/* maybe change py-4 to py-2 or remove*/}
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Explore the island's wonders</p>
            </div>
            <p className='md:text-2xl text-xl text-gray-500 font-bold'>
                Something about the island placeholder text
            </p>
            <button className='bg-[#00df9a] hover:bg-[#00df9a]/80 text-black w-[200px] rounded-xs font-bold py-2 mt-6 mx-auto'>Book a Tour</button>
        </div>
        
    </div>
  )
}

export default Hero