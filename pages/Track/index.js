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
    if (searchInput !== '')
      try {
        const res = await fetch(`/api/${caseType}/${searchInput}/`)
        const json = await res.json()
        setResult(json)
        console.log(result)
      } catch (e) {
        console.error(e)
      }
    else {
      setResult({})
    }
  }
  return (
    <>
      <Header />
      <div className="px-20 mt-30">
        <div className="my-5">
          <label htmlFor="collection" className="text-xl">
            Select Type
          </label>
          <div className="select">
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
      </div>
      <div>
      {Object.keys(result).length === 0 && result.constructor === Object
          ? null
          :
          (
            <>
            
            <div className={styles.Record}>
              {/* JSON.stringify(result, null, '\n') */}

              <div class="mt-10 py-3">
                <div class="px-10 mt-10">
                  <div class="shadow-2xl bg-white rounded-md max-w-4xl mx-auto p-4 space-y-4 shadow-lg">
                    <h1 class="mb-2 font-semibold">CrimeType:  <span class="font-thin">{result.data.crimeType}</span></h1>
                    <div class="pt-2">
                      <h1 class="font-semibold">Description:</h1>
                      <p class="font-thin mt-2">{result.data.descr}</p>
                    </div>
                    <h1 class="border-t mb-2 pt-3 font-semibold">Victim : <span class="font-thin">{result.data.victim}</span></h1>
                    <h1 class="border-t mb-2 pt-3 font-semibold">Suspect: 
                      <span class="font-thin">{result.data.suspect}</span>
                    </h1>
                    <h1 class="border-t mb-2 pt-3 font-semibold">Place: <span class="font-thin">{result.data.place}</span></h1>
                    
                  </div>
                </div>
              </div>
            </div>
          </>
          )
          }
      </div>
    </>
  )
}

export default Page
