/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Affiliate from './pages/Affiliate'
import SignUp from './pages/SignUp'
import Resources from './pages/Resources'
import Pricing from './pages/Pricing'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import Chatbots from './pages/Chatbots';

export default function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sign-in' element={<SignIn/>} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/affilicate' element={<Affiliate/>} />
            <Route path="/resources" element={<Resources />} />
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/chatbots' element={<Chatbots/>} />
            <Route element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
