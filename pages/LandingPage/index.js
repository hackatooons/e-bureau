import React from "react"
// import "../../components/Header/Header"
import styles from '../../asset/css/index.module.css'
import Footer from '../../components/Footer/Footer'
function page() {
  return (

    <div className={styles.outerdiv}>
      <div className={styles.bubbles}>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
      </div>
      <h6 className={styles.headingsec}>A crime management platform</h6>
      <h3 className={styles.heading}>WELCOME TO E-bureau</h3>

      <hr className={styles.horiBarFirst} />
      <button className={styles.circlebtn}></button>

      <hr className={styles.horiBarSecond} />

      <div className={styles.firstDiv}>
        <p>
          This is a E-platform which aims to help to make crime management easier.
          This includes general diary, crime reports and reporting of missing
          person.

        </p>
      </div>
      <button className={styles.firstBtn}>SignUp</button>
      <button className={styles.secondBtn}>Login</button>
      <img
        src="https://www.linkpicture.com/q/Data.png"
        className={styles.hackerimg}
        alt=""
      />
      <section className=" bg-blueGray-200 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
              <div className="px-4 flex-auto"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-16">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-user-friends text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              The Duties of the Citizen
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Every citizen is expected to inform the Police about the
              commission or likely commission of a cognizable offence. They
              are legally bound to follow reasonable directions given by a
              Police Officer/Policeman in Uniform. Sheltering of proclaimed
              offenders is a serious offence.
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
              The citizen is supposed to render necessary assistance to the
              Police in the discharge of their lawful duties. All enlightened
              citizens must help in maintaining a pollution free environment.
            </p>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-green-700">
              <img
                alt="..."
                src="https://user-images.githubusercontent.com/70858557/134803954-9832e9f7-4183-4405-9c76-cbac80ee5b5b.jpg"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                ></svg>

                <h4 className="text-xl font-bold text-white"></h4>
                <p className="text-md font-light mt-2 text-white">
                  In public transport If someone harasses you, don't be
                  embarrassed. Look for help around you. If you are travelling
                  and you lose your fare money or ticket, speak to the driver
                  and explain. Also, Carry some identification on you to prove
                  that you are genuine. If someone tries to Rob you, Report
                  the crime to the police. Try to describe the attacker
                  accurately. Your actions can help prevent others from
                  becoming victims.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className="relative pt-12 bg-blueGray-50">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src="https://user-images.githubusercontent.com/70858557/134804846-0a3acae0-2dd8-401f-a526-d308083a5726.jpg"
            id={styles.cyberImg}
          />
        </div>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <div className="text-green-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-300 mt-8">
              <i className="fas fa-laptop text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold">
              Cyber Crime Facts and Stats
            </h3>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-700 bg-green-200 mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-800">
                      There is a hacker attack every 39 seconds
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-700 bg-green-200  mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-800">
                      95% of breached records came from only three industries
                      in 2016
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-700 bg-green-200  mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-800">
                      43% of cyber attacks target small business
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-700 bg-green-200  mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-800">
                      The global average cost of a data breach is $3.9 million
                      across SMBs
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-700 bg-green-200 mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-800">
                      Human intelligence and comprehension is the best defense
                      against phishing attacks
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </section>
      <Footer/>


    </div>
  )
}
export default page;