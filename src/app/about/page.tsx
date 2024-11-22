import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
      <div  className='bg-black text-white text-center'>
      <h1 className='text-4xl'>I am about page</h1><br />
      </div>
       <div className='bg-blue-300 h-screen text-3xl p-10'>
        <ul>
          <li>
          <Link href="about/aboutcollege">Go to College page...</Link>
          </li>
          <li>
          <Link href="about/aboutcollege">Go to School page...</Link>
          </li>
          <li>
          <Link href="about/aboutstudent">Go to student page...</Link>
          </li><br /><br />
          <li className='text-gray-700 '>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
        
    </div>
  )
}

export default About
