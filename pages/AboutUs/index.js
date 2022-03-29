import Head from 'next/head'
import styles from '../../asset/css/index.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import Link from 'next/link'

export default function AboutUs()
{
  return (
    <>
      <Head>
        <title>E-bureau| About Us</title>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
      </Head>
      <Navbar />
      <section className="relative  bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            id={styles.banner}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container flex justify-center  relative ">
            <div className="items-center justify-center flex flex-wrap">
              <div className=" px-4 ml-auto mr-auto text-center">
                <div id={styles.bannerText}>
                  <h1 className="text-green-500 font-Montserrat font-bold text-7xl">
                     About Us
                  </h1>
                  <br/>
                  <h1 className="text-white font-Montserrat font-bold text-5xl">
                   Crime Management <span className='text-green-500'>E-Bureau</span>.
                  </h1>
                  <p className="mt-6 w-1/2 mx-auto text-lg text-white font-space text-blueGray-200">
                    This is an E- platform used by both public and police for
                    making Crime Management easier. This includes general diary,
                    crime reports and reporting of missing person.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            ></svg>
          </div>
        </div>
      </section>

      <section className="relative pt-16 bg-blueGray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  ></svg>

                  <h4 className="text-xl font-Montserrat font-bold text-white">
                    Design specially to manage crime in a more efficient way
                  </h4>
                  <p className="text-md font-space pt-2 mt-2 text-white">
                    Providing an enviroment for all the citizens to get their
                    problems solved. All the report records can be accessed by
                    the police staff. The user can easily login and file a
                    complain of any of the above categories. Also they can track
                    their record using the unique identification number provided
                    to them after filing complain.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-800 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-handshake"></i>
                      </div>
                      <h6 className="text-xl font-Montserrat  mb-1 font-bold ">
                        Compassion and Fairness in approach
                      </h6>
                      <p className="mb-4 font-space pt-2 text-gray-800">
                        Specially designed to provide equal approach to
                        everyone. So that everyone is heard and provided quality
                        service at time.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-800 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-paper-plane"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-Montserrat font-bold">
                        Enforce the rule of law impartially and honesty
                      </h6>
                      <p className="mb-4 font-space pt-2 text-gray-800">
                        To follow the rule of impartially and honesty. And
                        ensure others do the same.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-800 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-times"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-Montserrat font-bold ">
                        Preventing crime and maintain public order
                      </h6>
                      <p className="mb-4 font-space pt-2 text-gray-800">
                        This platform will help us reduce crime making it a Duty
                        not only for the police, but for each and every citizen.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-800 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-star"></i>
                      </div>
                      <h6 className="text-xl mb-2 font-Montserrat font-bold">
                        Bringing peace, progress with support of community
                      </h6>
                      <p className="mb-4 font-space pt-2 text-gray-800">
                        And finally we all can together bring a change by making
                        our community better and bringing peace all over.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

     
    </>
  )
}
