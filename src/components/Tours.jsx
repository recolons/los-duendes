import React from 'react'

const Tours = () => {
  return (
    // add images to the tours section
    // replace placeholder text with actual text
    <div className='text-gray-900'>
      <div className="w-screen mx-auto h-40 bg-gray-400 flex items-center justify-center">
        <h1 className='text-5xl text-center font-medieval'>Our Tours</h1>
      </div>
      <div className="bg-white w-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 [&_button]:hover:bg-gray-800 [&_button]:transition-colors [&_button]:duration-300">
          <img className='w-[90%] h-[200px] mx-auto bg-red-300' src='' alt="/" />
          <div className='flex flex-col justify-center mb-3 mx-auto'>
            <p className='text-green-600 uppercase font-bold'>Municipio, PR</p>
            <h1 className='text-3xl font-bold py-3'>Via Ferrata</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, aliquid sit ducimus deleniti eaque culpa beatae iusto necessitatibus temporibus autem!</p>
            <button className='border w-[100px] rounded-sm font-medium bg-black text-white p-2 mt-4 hover:bg-gray-800'>Read More</button>
          </div>
          <img className='w-[90%] h-[200px] mx-auto bg-red-300' src='' alt="/" />
          <div className='flex flex-col justify-center mb-3 mx-auto'>
            <p className='text-green-600 uppercase font-bold'>Municipio, PR</p>
            <h1 className='text-3xl font-bold py-3'>Full Adventure</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, aliquid sit ducimus deleniti eaque culpa beatae iusto necessitatibus temporibus autem!</p>
            <button className='border w-[100px] rounded-sm font-medium bg-black text-white p-2 mt-4 hover:bg-gray-800'>Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tours