import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'

const Tours = () => {

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    }
  ]
  

  useEffect(() => {
    document.title = 'Tours | Travelling Duende'
  }, [])
  return (
    <div className='text-gray-900'>
      <div className='max-w-[800px] mt-[-72px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='uppercase text-green-700 font-bold p-2 pt-16'>Municipio, PR</p>
            <h1 className='lg:text-7xl sm:text-6xl text-4xl font-bold md:py-6 font-medieval'>Via Ferrata</h1>
            <p className='md:text-2xl text-xl text-gray-600 my-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor, perspiciatis aut quas nemo atque hic? Saepe pariatur mollitia facere unde doloribus adipisci, incidunt est perspiciatis molestias. Sequi maiores voluptatum nam, fugit earum sapiente commodi exercitationem architecto eveniet maxime nobis velit modi minus dignissimos iusto laboriosam non cumque omnis facilis.
            </p>
        </div>
        <Carousel slides={slides} />
    </div>
  )
}

export default Tours