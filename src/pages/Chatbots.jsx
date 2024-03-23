/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
export default function Chatbots() {
  return (
    <div className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
        <h1 className='text-slate-700 font-bold text-2xl lg:text-4xl'>
        ChatBot<span className='text-slate-500'></span>
      </h1>
        </div>
        <div className="flex-1">
          
          <button className='bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>         
              New Chatbot
          </button>
    
  </div>
  </div>
  </div>
  )
}
