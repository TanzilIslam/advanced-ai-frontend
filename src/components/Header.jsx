/* eslint-disable no-unused-vars */
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to="/">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
        <span className='text-slate-500'>Chat</span>
            <span className='text-slate-700'>base</span>
        </h1>
        </Link>
        <ul className="flex gap-4">

             <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/affiliate'>
            <li className="hidden sm:inline text-slate-700 hover:underline">
                Affiliate
            </li>
            </Link>
            <Link to='/sign-up'>
            <li className=' text-slate-700 hover:underline'>
                {' '}
                 Sign up
                 </li>
                 </Link>
        </ul>
       
        </div>
    </header>
  )
}
