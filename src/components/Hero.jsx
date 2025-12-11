import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='uppercase text-[#00df9a] font-bold p-2'>Private Exclusive Tours</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Come explore with us!</h1>
            <div>
                {/* maybe change py-4 to py-2 or remove*/}
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Explore the island's</p>
            </div>
        </div>
    </div>
  )
}

export default Hero