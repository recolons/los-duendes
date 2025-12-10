import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='text-white flex justify-between items-center max-w-[1240px] px-4 mx-auto h-24'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LOS DUENDES.</h1>
      <ul className='md:flex hidden'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Tours</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      {/* menu icon mobile */}
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      {/* mobile menu */}
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 md:hidden' : 'fixed -left-full top-0 ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-8 ml-4 mb-4'>LOS DUENDES.</h1>
        <ul className="uppercase p-4">
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Tours</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar