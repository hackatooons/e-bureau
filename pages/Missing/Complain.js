import React from 'react'
import { useState } from 'react'
import Form from '../../components/Form'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Complain = () => {
  async function addReport() {
    const payload = {
      name,
      age,
      place,
      descr,
    }
    try {
      fetch(`/api/missing`, {
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

  const title = 'File a Missing Report'
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [place, setPlace] = useState('')
  const [descr, setDescr] = useState('')

  const fields = [
    {
      name: 'Name',
      type: 'text',
      hintText: "Missing person's Age",
      value: name,
      handler: setName,
    },
    {
      name: 'Age',
      type: 'text',
      hintText: "Missing person's age",
      value: age,
      handler: setAge,
    },
    {
      name: 'Place',
      type: 'text',
      hintText: 'Missing place',
      value: place,
      handler: setPlace,
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
