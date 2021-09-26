import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        rel="stylesheet"
      />
      <div className=" flex flex-row items-center p-1 justify-between bg-white shadow-xs">
        <div className="ml-8 text-lg text-gray-700 hidden md:flex">
          E- Bureau
        </div>
        <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
          <i className="fas fa-bars"></i>
        </div>
        <div className="flex flex-row-reverse mr-8 md:flex">
          <div className="text-white text-center bg-gray-400 px-4 py-2 m-2">
            Login
          </div>
          <div className="text-white text-center bg-gray-400 px-4 py-2 m-2">
            Sign Up
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
