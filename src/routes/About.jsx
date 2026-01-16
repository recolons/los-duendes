import React, { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    document.title = 'About | Travelling Duende'
  }, [])
  return (
    <div className='relative text-gray-900 bg-[url(src/assets/photos/0A9DCBD4-947C-4389-9AB6-7921CBF03C8F.jpeg)] bg-cover 
      bg-center'>
        <div className='absolute inset-0 bg-white/80'></div>
        <div className='relative max-w-[800px] w-full mx-auto text-center flex flex-col items-center justify-center py-16'>
            <h1 className='lg:text-7xl sm:text-6xl text-4xl font-bold md:py-6 font-medieval'>About Us</h1>
            <div>
                {/* maybe change py-4 to py-2 or remove*/}
                <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4 text-green-800 italic'>This work began with a simple 
                  love for the island — and a deep respect for what happens when people are given space to truly arrive.</p>
            </div>
            <p className='md:text-2xl text-xl text-gray-800 my-2'>
              <span className='text-sky-500 font-bold'>Puerto Rico</span> is not just a destination to be visited, it is 
              a place to be felt. Its rivers carry stories. Its mountains hold quiet wisdom. Its people, flavors, music, 
              and rhythms reflect a way of living that is slower, richer, and more connected than what many of us are used to.
            </p>
            <p className='md:text-2xl text-xl text-gray-800 my-2'>
              What started as guiding friends and travelers into nature slowly became something deeper — a way of helping 
              people reconnect. Sometimes that reconnection happens on a jungle trail, barefoot in a river, breathing in 
              the clean air of El Yunque. Other times it happens over conversation, laughter, and a beautifully crafted 
              drink, as stories are shared and cultures meet.
            </p>
            <p className='md:text-2xl text-xl text-gray-800 my-2'>
              I don’t believe in rushing people through experiences. I believe in creating space for them.
            </p>
            <p className='md:text-2xl text-xl text-gray-800 my-2'>
              That’s why every journey begins with listening — a few simple questions, an open conversation, and time 
              to understand what you’re really looking for. From there, I help shape experiences that feel aligned with 
              who you are and where you are in your life. Sometimes that looks like an adventure. Sometimes it looks like 
              rest. Sometimes it looks like celebration. Sometimes it looks like reflection.
            </p>
            <p className='md:text-2xl text-xl text-gray-800 my-2'>
              There is no single way to experience this island — only the way that feels true for you.
            </p>
            <p className='md:text-2xl text-xl text-gray-800 my-2'>
              My role is not to lead from the front, but to walk beside you as a guide, a bridge, and a caretaker of 
              the space we enter together — whether that space is a rainforest river, a hidden trail, a distillery, 
              or a quiet moment of connection.
            </p>
            <p className='md:text-2xl text-xl text-gray-800 my-2'>These are not tours. They are invitations.</p>
            <p className='md:text-2xl text-xl text-gray-800 my-2'>
              Invitations to slow down. To feel more. To remember what it’s like to be present, curious, and alive.
            </p>
            <p className='md:text-2xl text-xl text-gray-800 my-2'>
              And if you leave with a deeper connection to this place, to yourself, or to the people you share it with
              <span className='font-bold'>— then the experience has done what it was meant to do.</span>
            </p>
            <p className='md:text-3xl text-2xl text-green-800 my-2 font-bold italic'>Welcome.</p>
        </div>
        
    </div>
  )
}

export default About