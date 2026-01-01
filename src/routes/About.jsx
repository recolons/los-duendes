import React, { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    document.title = 'About | Travelling Duende'
  }, [])
  return (
    <div className='text-gray-900 mt-[-72px]'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col items-center justify-center'>
            <h1 className='lg:text-7xl sm:text-6xl text-4xl font-bold md:py-6 font-medieval'>About Us</h1>
            <div>
                {/* maybe change py-4 to py-2 or remove*/}
                <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>We are a team of adventure seekers who are passionate about connecting with nature through our tours.</p>
            </div>
            <p className='md:text-2xl text-xl text-gray-600 my-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, blanditiis laborum eligendi eveniet veritatis ex sed dolor accusantium quas sint esse, culpa natus? Laborum quae culpa vel dolorem molestias cum, ullam ad at officia laboriosam unde corrupti? Eum dolores possimus sed odio quos velit reiciendis minus! Neque alias sunt beatae.
            </p>
        </div>
        
    </div>
  )
}

export default About