import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className=" flex flex-row items-center p-1 justify-between bg-white shadow-xs">
        <div className="ml-8 text-lg text-gray-700 hidden md:flex">
          <Link href="/">E- Bureau</Link>
        </div>
        <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
          <i className="fas fa-bars"></i>
        </div>
        <div className="flex flex-row-reverse mr-8 md:flex">
          <div className="text-white text-center bg-gray-400 px-4 py-2 m-2">
            Login
          </div>
          <Link href="/signup">
            <a className="text-white text-center bg-gray-400 px-4 py-2 m-2">
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
