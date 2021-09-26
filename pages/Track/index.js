import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './track.module.css'
import { GrSearchAdvanced } from 'react-icons/gr'
import { useState } from 'react'

const Page = () => {
  const [searchInput, setSearchInput] = useState('')
  const [caseType, setCaseType] = useState('crime')
  const [result, setResult] = useState({})

  async function getResult() {
    try {
      const res = await fetch(`/api/${caseType}/${searchInput}/`)
      const json = await res.json()
      setResult(json)
      console.log(result)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <Header />
      <div className="px-20 mt-40">
        <div className="my-5">
          <label for="collection" className="text-xl">
            Select Type
          </label>
          <div class="select">
            <select
              id="collection"
              value={caseType}
              onChange={(e) => setCaseType(e.target.value)}
              onBlur={(e) => setCaseType(e.target.value)}
            >
              <option value="crime">Crime</option>
              <option value="gd">General Diary</option>
              <option value="missing">Missing</option>
            </select>
          </div>
        </div>
        <div className="shadow-2xl flex">
          <input
            className="w-full rounded p-2"
            type="text"
            placeholder="Enter unique reference number"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            onClick={(e) => getResult()}
            className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400"
          >
            <GrSearchAdvanced />
          </button>
        </div>
        {JSON.stringify(result, null, '\n')}
      </div>
    </>
  )
}

export default Page
