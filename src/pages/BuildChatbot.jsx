/* eslint-disable no-unused-vars */
import React from 'react'

export default function BuildChatbot() {
  return (
    <div className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
        <h1 className='text-slate-700 font-bold text-3xl lg:text-5xl'>
        Data Sources<span className='text-slate-500'></span>
      </h1>
            <p className='text-gray-400 '>Add data sources to train chatbot</p>
        </div>
        <div className='box-border h-30 w-80 p-4  
                 bg-slate-100 m4 '>
        <div className='text-gray-400 '>
            <h1 className='align-content:center text-slate-700 font-bold text-1xl lg:text-2xl'>Sources</h1>

                <p className='text-xs lg:text-sm'>Total detected characters</p>

        <br />
        <br/>
        <br/>
        <br/>
        <br/>

        <button
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
            Create Chatbot
        </button>
      </div>
      </div>
  </div>
  </div>
  )
}
