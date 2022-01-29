import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const ContactUs = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handlerContact = async (e) => {
        e.preventDefault()

        if (!email && !message) {
            alert('Please Enter Both Details !!!');
            return;
        }

        try {
            const rsp = await axios.post('/api/contact', {
              email: email,
              message: message,
            })
            if (rsp.data.data === 'contact success') {
              alert("Thanks For Contacting, we'll get back to you super soon !!!");
              return;
            }
          } catch (error) {
            alert('An error occurred')
            console.log(error)
            return
        }
        router.replace('/');
    }

    return (
        <>
            <Header />
            <div className=" min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
                    <span className="border text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">Contact Us</span>
            <div className="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
                    <form action="">
                        
                        <div className="relative w-full mb-10">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" for="email">Email</label>
                            <input type="email" name="email" id="email" className="border-0 px-3 py-3 rounded text-sm shadow w-full
                                bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" for="message">Message</label>
                            <textarea maxlength="300" name="feedback" id="feedback" rows="4"
                                    cols="80"
                                    className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                    placeholder=""
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    required>
                            </textarea>
                        </div>
            
                        <button className="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded"
                            onClick={handlerContact}
                        >Submit</button>
                    </form>
            </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactUs;