import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import bcrypt from 'bcryptjs'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function verify() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [state, setState] = useState({
    mobileOtp: '',
    emailOtp: '',
  })
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('signup')))
    return () => {
      localStorage.removeItem('signup')
    }
  }, [])
  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleVerifyClick = async (e) => {
    e.preventDefault()
    if (!data) {
      alert('An error occurred')
      return
    }
    if (!(state && state?.emailOtp && state?.mobileOtp)) {
      alert('All fields are required')
      return
    }
    setLoading((prev) => true)
    const email = await bcrypt.compare(state?.emailOtp, data?.emailOtp)
    const mobile = await bcrypt.compare(state?.mobileOtp, data?.mobileOtp)
    if (!email || !mobile) {
      alert('Incorrect otp')
      setLoading((prev) => false)
      return
    }
    const info = {
      name: data?.name,
      email: data?.email,
      mobile: mobile,
      password: data?.password,
    }
    try {
      const res = await axios.post(`/api/signup`, info)
      if (res.data.data === 'Already Exists') {
        alert('User Already Exists')
        setLoading((prev) => false)
        router.replace('/')
        return
      }
    } catch (error) {
      alert('An error occurred')
      setLoading((prev) => false)
      return
    }
    setLoading((prev) => false)
    router.replace('/')
  }
  return (
    <>
      <Header />
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
          <h1 className="text-gray-800 block text-3xl font-extrabold font-title py-4">
            Signup
          </h1>
          <div className="relative sm:max-w-sm w-full">
            <div className="card shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-9"></div>
            <div className="card shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-9"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label
                htmlFor=""
                className="block mt-3 text-m text-gray-900 text-center font-semibold"
              >
                Verify Details
              </label>
              <form method="#" action="#" className="mt-10">
                <div>
                  <input
                    type="text"
                    placeholder="Enter Mobile OTP"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    name="mobileOtp"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="mt-7">
                  <input
                    type="text"
                    placeholder="Enter Email OTP"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    name="emailOtp"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="mt-7">
                  <button
                    className={`bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    } `}
                    onClick={handleVerifyClick}
                  >
                    Verify
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
