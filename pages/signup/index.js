import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { handleSignup } from '../../asset/js/handleSignup'
import { useRouter } from 'next/router'
import axios from 'axios'
import bcrypt from 'bcryptjs'
import { useFormik, Form, FormikProvider } from 'formik'
import * as Yup from 'yup'

export default function index() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [hasSentOTP, setHasSentOTP] = useState(false)
  const [otp, setOTP] = useState('')

  const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Fullname is too Short!')
      .max(50, 'Fullname is too Long!')
      .required('Fullname is required'),
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(30, 'Password is too Long!')
      .required('Password is required'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: async () => {
      setLoading((prev) => true)
      await handleSignup(values, setHasSentOTP)
      setLoading((prev) => false)
    },
  })

  const handleVerifyClick = async (e) => {
    e.preventDefault()
    if (!otp) {
      alert('Incorrect otp')
      return
    }
    const isMatch = await bcrypt.compare(otp, state?.otp)
    if (!isMatch) {
      alert('Incorrect otp')
      console.log('incorrect')
      return
    }
    try {
      const rsp = await axios.post('/api/signup', {
        name: state?.name,
        email: state?.email,
        password: state?.password,
      })
      if (rsp.data.data === 'Already Exists') {
        alert('User Already Exists')
        return
      }
    } catch (error) {
      alert('An error occurred')
      console.log(error)
      return
    }
    router.replace('/')
  }

  const { errors, touched, values, handleSubmit, getFieldProps } = formik

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
                {hasSentOTP
                  ? 'Verify OTP to continue'
                  : 'Signup to get Started'}
              </label>
              {hasSentOTP ? (
                <form action="#" method="#" className="mt-10">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Email OTP"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                      onChange={(e) => setOTP(e.target.value)}
                      value={otp}
                    />
                  </div>
                  <div className="mt-7">
                    <button
                      className={`bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      } `}
                      onClick={handleVerifyClick}
                      disabled={loading}
                    >
                      Verify
                    </button>
                  </div>
                </form>
              ) : (
                <FormikProvider value={formik}>
                  <Form
                    className="mt-10"
                    autoComplete="off"
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <div className="mt-4">
                      <label
                        for="price"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="text"
                          name="name"
                          class="focus:ring-blue-500 focus:border-blue-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md"
                          placeholder="Enter Full Name"
                          {...getFieldProps('name')}
                        />
                      </div>
                      <strong class="text-red-500 text-xs">
                        {touched.name && errors.name}
                      </strong>
                    </div>
                    <div className="mt-4">
                      <label
                        for="price"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="email"
                          name="email"
                          class="focus:ring-blue-500 focus:border-blue-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md"
                          placeholder="Enter Email"
                          {...getFieldProps('email')}
                        />
                      </div>
                      <strong class="text-red-500 text-xs">
                        {touched.email && errors.email}
                      </strong>
                    </div>
                    <div className="mt-4">
                      <label
                        for="price"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="password"
                          name="password"
                          class="focus:ring-blue-500 focus:border-blue-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md"
                          placeholder="Enter Password"
                          {...getFieldProps('password')}
                        />
                      </div>
                      <strong class="text-red-500 text-xs">
                        {touched.password && errors.password}
                      </strong>
                    </div>
                    <div className="mt-4">
                      <label
                        for="price"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Confirm Password
                      </label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="text"
                          name="confirmPassword"
                          class="focus:ring-blue-500 focus:border-blue-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md"
                          placeholder="Re-Enter Password"
                          {...getFieldProps('confirmPassword')}
                        />
                      </div>
                      <strong class="text-red-500 text-xs">
                        {touched.confirmPassword && errors.confirmPassword}
                      </strong>
                    </div>
                    <div className="mt-7">
                      <button
                        className={`bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 ${
                          loading ? 'opacity-50 cursor-not-allowed' : ''
                        } `}
                        type="submit"
                        disabled={loading}
                      >
                        Signup
                      </button>
                    </div>
                  </Form>
                </FormikProvider>
              )}
              {hasSentOTP ? (
                ''
              ) : (
                <>
                  <p className="block mt-3 text-m text-gray-900 text-center font-semibold">
                    Instructions
                  </p>
                  <div className="flex flex-col space-y-2">
                    <li>Password must be at least 8 characters long.</li>
                    <li>
                      Password must include at least one lowercase, uppercase
                      and digit.
                    </li>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
