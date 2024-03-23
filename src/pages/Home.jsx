/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  
  return (
    <div>
    {/* top */}
    <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
      <h1 className='text-slate-700 font-bold text-4xl lg:text-7xl'>
        ChatBot for<span className='text-slate-500'> your website</span>
        <br />
        Build a custom GPT, 
        
      </h1>
      <div className='text-gray-400 text-xs lg:text-sm'>
      embed it on your website
        <br />
        and let it handle customer support
      </div>
      <Link
        to={'/chatbots'}
        className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
      >
        Let's get started...
      </Link>
    </div>
    </div>
  )
}
