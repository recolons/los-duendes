import React from 'react'

const Carousel = ({ slides }) => {
  return (
    <div className='h-[400px] w-9/10 mx-auto'>
      <div className='w-full h-full bg-center bg-cover duration-500' style={{backgroundImage: `url(${slides[0].url})`}}></div>
    </div>
  )
}

export default Carousel