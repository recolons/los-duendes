import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-gray-300'>
        <div className='md:col-span-2'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Travelling Duende.</h1>
            {/* short description, maybe say follow us on social media */}
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <div className='flex justify-between md:w-[75%] w-[50%] my-6'>
                <FaFacebook size={20} />
                <FaInstagram size={20} />
                <FaXTwitter size={20} />
                <FaYoutube size={20} />
            </div>
        </div>
        <div className='col-span-1'>
          <h1>Test2</h1>
        </div>
        
    </div>
  )
}

export default Footer