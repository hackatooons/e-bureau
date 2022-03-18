import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


export default function index() {
  

  return (
    <>
      <Header />
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
          <h1 className="text-gray-800 block text-3xl font-extrabold font-title py-4">
            Sign In
          </h1>
          <div className="relative sm:max-w-sm w-full">
            <div className="card shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-9"></div>
            <div className="card shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-9"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label
                htmlFor=""
                className="block mt-3 text-m text-gray-900 text-center font-semibold"
              >
              </label>
              
                <form method="#" action="#" className="mt-10">
                  <div className='mt-4'>
                    <label for="price" class="block text-sm font-medium text-gray-700">Email Address</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <input type="text" name="email" class="focus:ring-blue-500 focus:border-blue-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md" placeholder="Enter Email"/>
                    </div>
                    {/* <strong class="text-red-500 text-xs">Email field is required</strong> */}
                  </div>
                  <div className='mt-4'>
                    <label for="price" class="block text-sm font-medium text-gray-700">Password</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <input type="password" name="password" class="focus:ring-blue-500 focus:border-blue-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md" placeholder="Enter Strong Password"/>
                    </div>
                    {/* <strong class="text-red-500 text-xs">Password field is required</strong> */}
                  </div>
                  <br/>
                  <button
                      className={`bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 `}
                    >
                      Sign In
                    </button>       
         <br/>
         <br/>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> Not registered yet? Register&nbsp;<a href= "#" > here </a> </div>
    </form>
    </div>
  </div>
   </div>
    </div>
      <Footer />
    </>
  )
}
