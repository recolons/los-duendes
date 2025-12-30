import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {

  const [nav, setNav] = useState(true)
  const location = useLocation()

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='text-white flex justify-between items-center w-full px-24 mx-auto h-18 bg-green-900'>
      <Link to='/'><h1 className='w-full text-2xl font-bold font-medieval'>Travelling Duende.</h1></Link>
      <ul className='md:flex hidden [&_li]:hover:text-amber-600/50 [&_li]:transition-colors [&_li]:duration-300 '>
        <li className='p-4'>
          <Link to='/' className={location.pathname === '/' ? 'text-amber-600' : ''}>Home</Link>
        </li>
        <li className='p-4'>
          <Link to='/tours' className={location.pathname === '/tours' ? 'text-amber-600' : ''}>Tours</Link>
        </li>
        <li className='p-4'>
          <Link to='/about' className={location.pathname === '/about' ? 'text-amber-600' : ''}>About</Link>
        </li>
        <li className='p-4'>
          <Link to='/contact' className={location.pathname === '/contact' ? 'text-amber-600' : ''}>Contact</Link>
        </li>
      </ul>
      {/* menu icon mobile */}
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      {/* mobile menu */}
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-green-900 ease-in-out duration-500 md:hidden' : 'fixed -left-full top-0 ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold m-8 ml-4 mb-4 font-medieval'>Travelling Duende.</h1>
        <ul className="uppercase p-4 [&_li]:hover:text-amber-600/50 [&_li]:transition-colors [&_li]:duration-300">
            <Link to='/' className={location.pathname === '/' ? 'text-amber-600' : ''}><li className='p-4 border-b border-green-800'>Home</li></Link>
            <Link to='/tours' className={location.pathname === '/tours' ? 'text-amber-600' : ''}><li className='p-4 border-b border-green-800'>Tours</li></Link>
            <Link to='/about' className={location.pathname === '/about' ? 'text-amber-600' : ''}><li className='p-4 border-b border-green-800'>About</li></Link>
            <Link to='/contact' className={location.pathname === '/contact' ? 'text-amber-600' : ''}><li className='p-4'>Contact</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar