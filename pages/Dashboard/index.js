import Head from 'next/head'
import styles from '../../asset/css/index.module.css'
import Navbar from '../../components/Navbar/Navbar'
import { GiTrenchKnife, GiRobberMask } from 'react-icons/gi'
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
      {/* header */}
      {/* <div className=" flex flex-row items-center p-1 justify-between bg-black shadow-xs">
        <div className="ml-8 text-3xl text-white ">
          <Link href="/">E- Bureau</Link>
        </div>
        <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
          <i className="fas fa-bars"></i>
        </div>
        <div className="flex flex-row-reverse mr-8 md:flex">
          <Link href="/signin">
            <div className="text-white text-center bg-black px-5 py-2 m-2">
              Login
            </div>
          </Link>
          <Link href="/signup">
            <a className="text-white text-center bg-black px-4 py-2 m-2">
              Sign Up
            </a>
          </Link>
        </div>
      </div> */}
      <Navbar />
      {/* header ends */}

      <div className="pt-24 bg-green-500">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center text-center md:text-center">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Crime Management E-Bureau
            </h1>
            <p className="leading-normal text-2xl mb-8">
              This is an E- platform used by both public and police for making
              Crime Management easier. This includes general diary, crime
              reports and reporting of missing person. right!
            </p>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img
              className="w-full md:w-4/5 z-50"
              src="https://i.postimg.cc/RVJSKfQR/left.png"
            />
          </div>
        </div>
      </div>
      <section class="bg-white border-b py-8 bg-yellow-50">
        <div class="container max-w-5xl mx-auto m-8">
          <h4 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 ">
            Design specially to manage crime in a more efficient way
          </h4>
          <p class="text-gray-1000 mb-8">
            Providing an enviroment for all the citizens to get their problems
            solved. All the report records can be accessed by the police staff.
            The user can easily login and file a complain of any of the above
            categories. Also they can track their record using the unique
            identification number provided to them after filing complain.
          </p>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Compassion and Fairness in approach
              </h3>
              <p class="text-gray-600 mb-8">
                Specially designed to provide equal approach to everyone. So
                that everyone is heard and provided quality service at time.
                <br />
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6">
              <img
                className="w-full md:w-4/5 z-40"
                src="https://i.postimg.cc/JzPTN1V5/image-processing20201111-25818-soj55t-removebg-preview.png"
              />
            </div>
          </div>
          <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <img
                src="https://i.postimg.cc/d3hvYW2z/Screenshot-2022-03-06-014957-removebg-preview.png"
                className="w-full md:w-4/5 z-40"
              />
            </div>
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <div class="align-middle">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Enforce the rule of law impartially and honesty
                </h3>
                <p class="text-gray-600 mb-8">
                  To follow the rule of impartially and honesty. And ensure
                  others do the same.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Preventing crime and maintain public order
              </h3>
              <p class="text-gray-600 mb-8">
                This platform will help us reduce crime making it a Duty not
                only for the police, but for each and every citizen.
                <br />
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6">
              <img
                className="w-full md:w-4/5 z-40"
                src="https://i.postimg.cc/qqqnddZ4/Impartial-scales-34221-1280-1110x550-removebg-preview.png"
              />
            </div>
          </div>
          <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <img
                src="https://i.postimg.cc/mZKNGPRn/peace-symbol-PNG8-removebg-preview.png"
                className="w-full md:w-4/5 z-40"
              />
            </div>
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <div class="align-middle">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Bringing peace, progress with support of community
                </h3>
                <p class="text-gray-600 mb-8">
                  And finally we all can together bring a change by making our
                  community better and bringing peace all over.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white border-b py-8 ">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12 ">
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink bg-gray-500 ">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  General Diary
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  A general diary (GD) entry or a daily diary entry is made when
                  any kind of complaint is lodged and the police enter the
                  details in their records. Thereafter, if the police believe
                  that there is some prima facie evidence of a cognizable
                  offense being committed, it is registered as an FIR.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-start">
                <Link href="/GeneralDiary">
                  <button class="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-green-500">
                    Visit
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink bg-gray-500">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Crime Report
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  In many cases Police solves a crime with the help of phone
                  calls from people like you. Your Call DOES MAKE A DIFFERENCE.
                  Minor crime committed in can also be reported over the
                  Internet. The system is designed to forward information to the
                  relevant police force.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-left ">
                <Link href="/crime">
                  <button class="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-green-500">
                    Visit
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink bg-gray-500">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <div class="w-full font-bold text-xl text-gray-800 px-6 ">
                  Missing Report
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Each year about 1,000 people are reported missing to Police.
                  The good news however is that the Police Missing Persons Unit
                  is here to help find your loved one. Most of the missing
                  persons reported are located, with more than half simply
                  failing to tell their families where they are.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-left">
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
              <Link href="/Missing">
                  <button class="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-green-500">
                    Visit
                  </button>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
