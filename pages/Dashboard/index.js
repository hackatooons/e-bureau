import Head from 'next/head'
import styles from '../../asset/css/index.module.css'
import Header from '../../components/Header/Header'
import {GiTrenchKnife, GiRobberMask} from 'react-icons/gi'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>E-bureau</title>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
      </Head>
      <Header />
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
          <div className="container relative mx-auto">
            <div className="items-center flex">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div id={styles.bannerText}>
                  <h1 className="text-white font-semibold text-5xl">
                    Crime Management E-Bureau.
                  </h1>
                  <p className="mt-6 text-lg text-white text-blueGray-200">
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

      <section className="pb-10 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4" />
        <div className="flex flex-wrap">
          <Link href="/GeneralDiary">
            <div
              className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center cursor-pointer"
              id={styles.cards}
            >
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                id={styles.eachCard}
              >
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">General Diary</h6>
                  <p className="mt-2 mb-4 text-gray-800">
                    A general diary (GD) entry or a daily diary entry is made
                    when any kind of complaint is lodged and the police enter
                    the details in their records. Thereafter, if the police
                    believe that there is some prima facie evidence of a
                    cognizable offense being committed, it is registered as an
                    FIR.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/crime">
            <div
              className="w-full md:w-4/12 px-4 text-center cursor-pointer"
              id={styles.cards}
            >
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                id={styles.eachCard}
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full "
                    style={{ backgroundColor: 'rgba(56, 189, 248, 1)' }}
                  >
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Crime Report</h6>
                  <p className="mt-2 mb-4 text-gray-800">
                    In many cases Police solves a crime with the help of phone
                    calls from people like you. Your Call DOES MAKE A
                    DIFFERENCE. Minor crime committed in can also be reported
                    over the Internet. The system is designed to forward
                    information to the relevant police force.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/Missing">
            <div
              className="pt-6 w-full md:w-4/12 px-4 text-center cursor-pointer"
              id={styles.cards}
            >
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                id={styles.eachCard}
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full"
                    style={{ backgroundColor: ' rgba(52, 211, 153, 1)' }}
                  >
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Missing Report</h6>
                  <p className="mt-2 mb-4 text-gray-800">
                    Each year about 1,000 people are reported missing to Police.
                    The good news however is that the Police Missing Persons
                    Unit is here to help find your loved one. Most of the
                    missing persons reported are located, with more than half
                    simply failing to tell their families where they are.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/postmortem">
            <div
              className="pt-6 w-full md:w-4/12 px-4 text-center cursor-pointer"
              id={styles.cards}
            >
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                id={styles.eachCard}
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-300"
                  >
                    <GiTrenchKnife />
                  </div>
                  <h6 className="text-xl font-semibold">Post Mortem Report</h6>
                  <p className="mt-2 mb-4 text-gray-800">
                    Finding out the precise cause of loss of life is regularly required for coverage claims. Genetic or environmental causes of disorder that may affect others related to the deceased may be discovered through an autopsy. Autopsy aids in finding out missed diagnoses and help in preventing repetition of these scientific errors in destiny instances.
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/prisoner">
            <div
              className="pt-6 w-full md:w-4/12 px-4 text-center cursor-pointer"
              id={styles.cards}
            >
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                id={styles.eachCard}
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-pink-400"
                  >
                    <GiRobberMask />
                  </div>
                  <h6 className="text-xl font-semibold">Adding Prisoner</h6>
                  <p className="mt-2 mb-4 text-gray-800">
                    Adding the prisoner name to the database to keep track
                  </p>
                </div>
              </div>
            </div>
          </Link>
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

                  <h4 className="text-xl font-bold text-white">
                    Design specially to manage crime in a more efficient way
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
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
                      <h6 className="text-xl mb-1 font-semibold">
                        Compassion and Fairness in approach
                      </h6>
                      <p className="mb-4 text-gray-800">
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
                      <h6 className="text-xl mb-1 font-semibold">
                        Enforce the rule of law impartially and honesty
                      </h6>
                      <p className="mb-4 text-gray-800">
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
                      <h6 className="text-xl mb-1 font-semibold">
                        Preventing crime and maintain public order
                      </h6>
                      <p className="mb-4 text-gray-800">
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
                      <h6 className="text-xl mb-1 font-semibold">
                        Bringing peace, progress with support of community
                      </h6>
                      <p className="mb-4 text-gray-800">
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




    </>
  )
}
