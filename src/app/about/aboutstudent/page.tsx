import React from 'react'
import Link from 'next/link'

const Aboutstudent = () => {
  return (
    <div>
      <div className='bg-blue-900 h-20 pt-2 text-white text-5xl text-center'>
      <h1>Welcome to student page</h1> 
       </div>
       <div className='bg-blue-300 h-screen text-5xl p-10'>
       <Link href="/about">Go to about page</Link><br /><br />
       <Link href="/" className='text-gray-500'>Home</Link>   
       </div>
    </div>
  )
}

export default Aboutstudent
