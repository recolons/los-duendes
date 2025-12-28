import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {

  useEffect(() => {
    document.title = '404 | Travelling Duende'
  }, [])
  return (
    <div className='text-white'>
        <h1 className='text-4xl font-bold'>404</h1>
        <p className='text-2xl'>Page not found</p>
        <Link to='/' className='text-blue-500'>Go back to home</Link>
    </div>
  )
}

export default NotFoundPage