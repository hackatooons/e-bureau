import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const generalDiary = () => {
    return (
        <>
            <Header />
            <div className="font-sans">
                <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                    <div className="relative sm:max-w-sm w-full">
                        <div className="card shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-9"></div>
                        <div className="card shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-9"></div>
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label for="" className="block mt-3 text-m text-gray-900 text-center font-semibold">
                                POLICE STAFF LOGIN
                            </label>
                            <form method="#" action="#" className="mt-10">

                                <div>
                                    <input type="email" placeholder="Enter Unique Identification No." className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>

                                <div className="mt-7">
                                    <input type="password" placeholder="Enter Name" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>

                                <div className="mt-7">
                                    <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Login
                                    </button>
                                </div>

                                <div className="flex mt-7 items-center text-center">
                                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                                    <label className="block font-medium text-sm text-gray-800 w-full">
                                        For General User
                                    </label>
                                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                                </div>

                                <div className="flex mt-7 justify-center w-full">
                                    <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                                        File a Complain
                                    </button>

                                    <button className="bg-green-700 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                                        Search Your Record
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default generalDiary
