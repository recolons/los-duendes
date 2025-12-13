import React from 'react'

const Tours = () => {
  return (
    <div className="bg-white text-black w-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4">
            <img className='w-[500px] h-[500px] mx-auto my-4 bg-red-300' src='' alt="/" />
            <div>
                <p>Municipio, PR</p>
                <h1>Via Ferrata</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, aliquid sit ducimus deleniti eaque culpa beatae iusto necessitatibus temporibus autem!</p>
                <button className='border w-[100px] rounded-sm font-medium bg-black text-white p-2 mt-4'>Read More</button>
            </div>
            <img src='' alt="/" />
            <div>
                <p>Municipio, PR</p>
                <h1>Via Ferrata</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, aliquid sit ducimus deleniti eaque culpa beatae iusto necessitatibus temporibus autem!</p>
                <button className='border w-[100px] rounded-sm font-medium bg-black text-white p-2 mt-4'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Tours