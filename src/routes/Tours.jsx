import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import { TbCliffJumping } from "react-icons/tb";
import { IoTrailSignOutline } from "react-icons/io5";
import { FaMountainSun, FaPersonSwimming, FaPersonHiking } from "react-icons/fa6";

const Tours = () => {

  const slides = [
    {
      url: 'src/assets/photos/0A9DCBD4-947C-4389-9AB6-7921CBF03C8F.jpeg'
    },
    {
      url: 'src/assets/photos/6A3137DF-A66C-4F8A-A17B-6265AB74B9CE.jpeg'
    },
    {
      url: 'src/assets/photos/A7513747-B8FA-48B2-8AD4-C2CDAC7A9471.jpeg'
    },
    {
      url: 'src/assets/photos/B899DF48-CAB8-4C92-A448-05344A232892.jpeg'
    },
    {
      url: 'src/assets/photos/D0D87A12-4873-449E-879B-E02E5A8447A9.jpeg',
    },
    {
      url: 'src/assets/photos/D01F6652-10D4-48A5-9201-077FAED66F9F.jpeg'
    }
  ]
  

  useEffect(() => {
    document.title = 'Tours | Travelling Duende'
  }, [])
  return (
    <div className='text-gray-900'>
      {/* via ferrata tour */}
      <div id='via-ferrata-description' className='max-w-[800px] mt-[-72px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='uppercase text-green-700 font-bold p-2 pt-16'>Naguabo, PR</p>
        <h1 className='lg:text-7xl sm:text-6xl text-4xl font-bold md:py-6 font-medieval'>Via Ferrata</h1>
        <p className='md:text-2xl text-xl text-gray-600 my-2'>
        Following a route on a mountain face equipped with steel cables, ladders, and other fixed anchors. These steel 
        attachments into the cliff face makes it so our guest can make their way across, up, and down the walls of the 
        river that would have been nearly impossible without the assistance of these attachments.
        </p>
      </div>
      {/* full adventure tour */}
      <div id='full-adventure-description' className='max-w-[800px] mt-[-72px] w-full mx-auto text-center flex flex-col justify-center'>
        <p className='uppercase text-green-700 font-bold p-2 pt-16'>Naguabo, PR</p>
        <h1 className='lg:text-7xl sm:text-6xl text-4xl font-bold md:py-6 font-medieval'>Full Adventure</h1>
        <p className='md:text-2xl text-xl text-gray-600 my-2'>
        The full adventure includes the Via Ferrata tour plus the following activities:
        </p>
      </div>
      <div id='tour-gallery-banner' className="w-screen mx-auto h-40 bg-green-900 flex items-center justify-center my-8">
        <h1 className='sm:text-5xl text-3xl text-center font-medieval text-white'>Tour Gallery</h1>
      </div>
      <Carousel slides={slides}/>
    </div>
  )
}

export default Tours