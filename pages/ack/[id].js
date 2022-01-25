// 61ef7fbd4ca028f5e439029e

import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Link from 'next/link'

const Page = () => {
  const router = useRouter()
  const id = router.query.id
  return (
    <>
      <Header />
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 block mx-auto">
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">
            Thank you for Reporting
          </h2>
          <p className="mt-2 py-5 text-gray-600">
            Your unique complaint id is <span className="font-bold">{id}</span>.{' '}
            <br />
            Keep this for your future reference
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <Link href="/">
            <a className="text-xl font-medium text-indigo-500">E-bureau</a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page
