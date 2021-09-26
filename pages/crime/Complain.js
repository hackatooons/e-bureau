import React from 'react'
import { useState } from 'react'
import Form from '../../components/Form'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useRouter } from 'next/router'

const Complain = () => {
  const title = 'Report a crime'
  const router = useRouter()
  const [victimName, setVictimName] = useState('')
  const [suspectName, setSuspectName] = useState('')
  const [crimeType, setCrimeType] = useState('')
  const [place, setPlace] = useState('')
  const [descr, setDescr] = useState('')

  async function addCrime() {
    const payload = {
      victim: victimName,
      suspect: suspectName,
      crimeType,
      descr,
      place,
    }

    const res = await fetch(`/api/crime/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      referrerPolicy: 'no-referrer',
    })
    const json = await res.json()
    router.push(`/ack/${json.data._id}`)
  }


  const fields = [
    {
      name: 'Victim Name',
      type: 'text',
      hintText: "Victim's Name",
      value: victimName,
      handler: setVictimName,
    },
    {
      name: 'Suspect Name',
      type: 'text',
      hintText: "Suspect's Name",
      value: suspectName,
      handler: setSuspectName,
    },
    {
      name: 'Crime Type',
      type: 'text',
      hintText: 'Crime Type',
      value: crimeType,
      handler: setCrimeType,
    },
    {
      name: 'Place',
      type: 'text',
      hintText: 'Place',
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
      <Form title={title} fields={fields} onsubmit={addCrime} />
      <Footer />
    </>
  )
}

export default Complain
