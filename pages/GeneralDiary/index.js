import React from 'react'
import styles from './GeneralDiary.module.css'

const generalDiary = () => {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center"
      id={styles.bg}
    >
      <a
        href="#"
        className="flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 w-48 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px "
        id={styles.btn}
      >
        <span className="font-bold">FILE A COMPLAIN</span>
      </a>

      <a
        href="#"
        className="flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 w-48 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px "
        id={styles.btn}
      >
        <span className="font-bold">SEARCH RECORD</span>
      </a>
    </div>
  )
}

export default generalDiary
