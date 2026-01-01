import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {

  useEffect(() => {
    document.title = '404 | Travelling Duende'
  }, [])
  return (
    <div className='text-gray-900 h-screen flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold font-medieval'>404</h1>
        <p className='text-2xl font-medieval'>Page not found</p>
        <Link to='/' className='text-blue-500'>Go back to home</Link>
    </div>
  )
}

export default NotFoundPage