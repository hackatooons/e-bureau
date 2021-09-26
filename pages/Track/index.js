import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const Page = () => {
  return (
    <>
      <Header />
      <div className="p-8">
        <div className="flex items-center rounded-full shadow-xl">
          <input
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"
          />

          <div className="p-4">
            <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
              icon
            </button>
          </div>
        </div>
      </div>
      <div
        className="min-h-screen"
        style={{ backgroundColor: '#e4e4e7' }}
      ></div>
      <Footer />
    </>
  )
}

export default Page
