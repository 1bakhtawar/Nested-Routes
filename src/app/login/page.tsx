import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div>
      <div className='bg-pink-500 h-20 text-center pt-3 text-white'>
      <h1 className='text-4xl font-bold font-mono'>I am login page</h1>
      </div>

       <div className='bg-black h-screen text-gray-400 text-3xl p-10'>
       <Link href="/">Home</Link>
       </div>
      
    </div>
  )
}

export default Login
