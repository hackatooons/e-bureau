import React from 'react'
import { useState } from 'react'
import Form from '../../components/Form'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Complain = () => {
  const title = 'General Diary'
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [idType, setIdType] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [place, setPlace] = useState('')
  const [descr, setDescr] = useState('')

  async function addReport() {
    const payload = {
      name,
      age,
      idType,
      idNumber,
      place,
      descr,
    }
    try {
      fetch(`/api/gd/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        referrerPolicy: 'no-referrer',
      })
    } catch (e) {
      console.error(e)
    }
  }
  const fields = [
    {
      name: 'Name',
      type: 'text',
      hintText: 'Your Name',
      value: name,
      handler: setName,
    },
    {
      name: 'Age',
      type: 'number',
      hintText: 'Your age',
      value: age,
      handler: setAge,
    },
    {
      name: 'Place',
      type: 'text',
      hintText: 'City, State',
      value: place,
      handler: setPlace,
    },
    {
      name: 'Identification Type',
      type: 'text',
      hintText: 'Aadhar/PAN/Driving License',
      value: idType,
      handler: setIdType,
    },
    {
      name: 'Identification Number',
      type: 'number',
      hintText: 'Aadhar/PAN/Driving License',
      value: idNumber,
      handler: setIdNumber,
    },
    {
      name: 'Description',
      type: 'text',
      hintText: 'Description',
      value: descr,
      handler: setDescr,
    },
  ]
  return (
    <>
      <Header />
      <Form title={title} fields={fields} onsubmit={addReport} />
      <Footer />
    </>
  )
}

export default Complain
