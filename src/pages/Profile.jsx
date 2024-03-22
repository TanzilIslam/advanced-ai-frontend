/* eslint-disable no-unused-vars */
import React from 'react'
import {useSelector} from 'react-redux'

export default function Profile() {
    const {currentUser} = useSelector(state => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Account</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} alt='' 
        className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
          <input
          type='text'
          placeholder='username'
          defaultValue={currentUser.username}
          id='username'
          className='border p-3 rounded-lg'
        />
        <input
          type='email'
          placeholder='email'
          id='email'
          defaultValue={currentUser.email}
          className='border p-3 rounded-lg'
        />

      </form>
      <div className='flex justify-between mt-5'>
        <span
          className='text-red-700 cursor-pointer'
        >
          Delete account
        </span>
        <span className='text-red-700 cursor-pointer'>
          Sign out
        </span>
      </div>
    </div>
  )
}