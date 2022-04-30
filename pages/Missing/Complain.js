import React from 'react'
import { useState, useEffect } from 'react'
import Form from '../../components/Form'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Complain = () => {
  const router = useRouter()

  const title = 'File a Missing Report'
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [place, setPlace] = useState('')
  const [descr, setDescr] = useState('')


  const showAlert = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 2200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  async function addReport() {
    const payload = {
      name,
      age,
      place,
      descr,
    }

    if (name.trim() === '') {
      showAlert('Name field is required')
    } else if (age.trim() === '') {
      showAlert('Age field is required')
    } else if (isNaN(age.trim())) {
      showAlert('Age must be a number')
    } else if (place.trim() === '') {
      showAlert('Place is required')
    } else if (descr.trim() === '') {
      showAlert('Description is required')
    } else {
      try {
        const res = await fetch(`/api/missing`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          referrerPolicy: 'no-referrer',
        })
        const json = await res.json()
        router.push(`/ack/${json.data._id}`)
      } catch (e) {
        console.error(e)
      }
    }
  }

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
       <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={2200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Form title={title} fields={fields} onsubmit={addReport} />
      <Footer />
    </>
  )
}

export default Complain
