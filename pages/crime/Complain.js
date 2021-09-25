import React from 'react'
import { useState } from 'react'
import Form from '../../components/Form'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Complain = () => {
  const title = 'Report a crime'
  const [victimName, setVictimName] = useState('')
  const [suspectName, setSuspectName] = useState('')
  const [crimeType, setCrimeType] = useState('')
  const [description, setDescription] = useState('')

  function myFunction() {
    console.log('HelloWorld')
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
      name: 'Description',
      type: 'text',
      hintText: 'Description',
      value: description,
      handler: setDescription,
    },
  ]
  return (
    <>
      <Header />
      <Form title={title} fields={fields} onsubmit={myFunction} />
      <Footer />
    </>
  )
}

export default Complain
