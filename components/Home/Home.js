import React from 'react'
import NextLink from 'next/link'
import {image} from "../../asset/Images/photot.png"
const Home = () => {
  return (
    
        <div className='text-white mt-32'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='lg:text-6xl md:text-5xl sm:text-3xl font-Montserrat font-bold'>Welcome To <span className='text-green-500'>E-Bureau</span></div>
                <div className='lg:text-3xl md:text-2xl sm:text-xl font-bitter font-light'>A Crime Management System</div>
            </div>
            <div className='flex justify-center items-center my-8 font-space'>
                <div className='lg:w-3/5 md:w-3/5 sm:w-5/6 text-center text-lg'>E-Bureau is an online Crime managment System which aims to helps in reducing and managing crime increasing day by day in different forms</div>
            </div>
            <div className='flex flex-row gap-7 justify-center items-center my-9 '>
              <NextLink href="/signup">
                <a className="bg-white text-black font-Montserrat font-medium hover:text-white hover:bg-green-600  border-[1px] border-solid rounded cursor-pointer no-underline py-3.5 px-7">
                  SignUp
                </a>
              </NextLink>
              <NextLink href="/signin">
                <a className="bg-transparent text-black font-Montserrat font-medium text-white hover:bg-green-600 border hover:border-green-600 rounded cursor-pointer no-underline py-3.5 px-7">
                  Login
                </a>
              </NextLink>
            </div>
            <div className='flex justify-center items-center lg:w-3/6 sm:w-4/6 mx-auto'>
              <img className="lg:mt-9 sm:mt-7"src='https://svgshare.com/i/esT.svg' title='' />
            </div>
        </div>

        
    
  )
}

export default Home