import React, { useEffect, useState } from 'react'
import Link from 'next/link'
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
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                      name="name"
                    />
                  </div>

                  <div className="mt-7">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                      name="email"
                    />
                  </div>

                  <div className="mt-7">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                      name="password"
                    />
                  </div>
                  <br/>
                  <button
                      className={`bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 `}
                    >
                      Sign In
                    </button>       
         <br/>
         <br/>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> Not registered yet? Register&nbsp; <Link href='../signup'> here </Link></div>
    </form>
    </div>
  </div>
   </div>
    </div>
      <Footer />
    </>
  )
}
