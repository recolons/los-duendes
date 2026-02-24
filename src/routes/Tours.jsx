import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import { TbCliffJumping, TbTrekking } from "react-icons/tb";
import { IoTrailSignOutline } from "react-icons/io5";
import { FaMountainSun, FaPersonSwimming, FaPersonHiking, FaDiamond } from "react-icons/fa6";
import { GiZigzagHieroglyph } from "react-icons/gi";

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
      <div id='via-ferrata-description' className='max-w-[800px] mt-[12px] w-full mx-auto text-center flex flex-col justify-center'>
        <p className='uppercase text-green-700 font-bold p-2 pt-16'>Naguabo, PR</p>
        <h1 className='lg:text-7xl sm:text-6xl text-4xl font-bold md:py-6 font-medieval'>Via Ferrata</h1>
        <p className='md:text-2xl text-xl text-gray-600 my-2'>
          Following a route on a mountain face equipped with steel cables, ladders, and other fixed anchors. These steel
          attachments into the cliff face makes it so our guest can make their way across, up, and down the walls of the
          river that would have been nearly impossible without the assistance of these attachments.
        </p>
      </div>
      <div className='flex justify-center py-16 gap-2 text-green-900'>
        <FaDiamond size={8} />
        <FaDiamond size={8} />
        <FaDiamond size={8} />
      </div>
      {/* full adventure tour */}
      <div id='full-adventure-description' className='max-w-[800px] mt-[-72px] w-full mx-auto text-center flex flex-col justify-center'>
        <p className='uppercase text-green-700 font-bold p-2 pt-16'>Naguabo, PR</p>
        <h1 className='lg:text-7xl sm:text-6xl text-4xl font-bold md:py-6 font-medieval'>Full Adventure</h1>
        <p className='md:text-2xl text-xl text-gray-600 my-2 mb-8'>
          The full adventure includes the Via Ferrata tour plus the following activities:
        </p>
        <div className='max-w-[800px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <FaPersonSwimming className='w-20 mx-auto mt-8 text-green-900' alt="Swimming" size={60} />
            <h2 className='text-2xl font-bold text-center py-8'>Swimming</h2>
            <div className='text-center font-medium'>
              <p className='py-2 border-t mx-8 mt-2 pt-6 mb-6'>Swim or float from point A to point B</p>
            </div>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <TbCliffJumping className='w-20 mx-auto mt-8 text-green-900' alt="Cliff Jumping" size={70} />
            <h2 className='text-2xl font-bold text-center py-8'>Cliff Jumping</h2>
            <div className='text-center font-medium'>
              <p className='py-2 border-t mx-8 mt-2 pt-6 mb-6'>Jumping in a straight, upright, vertical posture into the river </p>
            </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <TbTrekking className='w-20 mx-auto mt-8 text-green-900' alt="River Trekking" size={70} />
            <h2 className='text-2xl font-bold text-center py-8'>River Trekking</h2>
            <div className='text-center font-medium'>
              <p className='py-2 border-t mx-8 mt-2 pt-6 mb-6'>Hiking/canyoning along the river </p>
            </div>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <FaPersonHiking className='w-20 mx-auto mt-8 text-green-900' alt="Swimming" size={60} />
            <h2 className='text-2xl font-bold text-center py-8'>Primitive Trail Hiking</h2>
            <div className='text-center font-medium'>
              <p className='py-2 border-t mx-8 mt-2 pt-6 mb-6'>Hiking in a trial that is muddy, uneven terrain trough the rainforest</p>
            </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <GiZigzagHieroglyph className='w-20 mx-auto mt-8 text-green-900' alt="Petroglyphs" size={70} />
            <h2 className='text-2xl font-bold text-center py-8'>Petroglyphs</h2>
            <div className='text-center font-medium'>
              <p className='py-2 border-t mx-8 mt-2 pt-6 mb-6'>We’ll take you to admire and take pictures next to Taíno art carvings on a boulder</p>
            </div>
          </div>
        </div>
      </div>
      <div id='tour-gallery-banner' className="w-screen mx-auto h-40 bg-green-900 flex items-center justify-center my-8">
        <h1 className='sm:text-5xl text-3xl text-center font-medieval text-white'>Tour Gallery</h1>
      </div>
      <Carousel slides={slides} />
    </div>
  )
}

export default Tours