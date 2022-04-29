import React from 'react'
import { useState } from 'react'
import Form from '../../components/Form'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Complain = () => {
  const router = useRouter()
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

    if (name.trim() === '') {
      showAlert('Name field is required')
    } else if (age.trim() === '') {
      showAlert('Age field is required')
    } else if (isNaN(age.trim())) {
      showAlert('Age must be a number')
    } else if (idType.trim() === '') {
      showAlert('Identification Type is required')
    } else if (idNumber.trim() === '') {
      showAlert('Identification No. is required')
    } else if (place.trim() === '') {
      showAlert('Place is required')
    } else if (descr.trim() === '') {
      showAlert('description is required')
    } else {
      const res = await fetch(`/api/gd/`, {
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
