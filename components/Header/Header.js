import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className=" flex flex-row items-center p-1 justify-between bg-white shadow-xs">
      <div className="ml-8 text-lg text-gray-700 hidden md:flex">E- Bureau</div>
      <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
        <input
          type="search"
          name="serch"
          placeholder="Search"
          className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
        />
        <i
          className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"
          id={styles.searchIcon}
        ></i>
      </span>
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
  )
}

export default Header
