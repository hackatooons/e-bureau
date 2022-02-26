import React from 'react'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        rel="stylesheet"
      />
      <footer className="relative  pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-white">
                Let's us together bring change!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                File complain, track using tracking Id. Then sit back and relax,
                let the police Officers solve the problem.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <IoLogoTwitter size="1x" style={{ color: '#58A7DC' }} />
                </button>
                <button
                  className="text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaFacebook size="1x" style={{ color: '#1877F2' }} />
                </button>
                <button
                  className="text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaGithub size="1x" />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        About Us
                      </a>
                    </li>
                    <Link href="/GeneralDiary">
                      <li>
                        <a
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href=""
                        >
                          General Diary
                        </a>
                      </li>
                    </Link>
                    <Link href="/Missing">
                      <li>
                        <a
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href=""
                        >
                          Missing Report
                        </a>
                      </li>
                    </Link>
                    <Link href="/crime">
                      <li>
                        <a
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href=""
                        >
                          Crime Report
                        </a>
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Other Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <Link href="/contactUs">
                      <li>
                        <a
                          className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href=""
                        >
                          Contact Us
                        </a>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © <span id="get-current-year">2021</span>
                <a
                  href=""
                  className="text-white hover:text-gray-800"
                  target="_blank"
                />{' '}
                all rights
                <a
                  href=""
                  className="text-white hover:text-blueGray-800"
                >
                  {' '}
                  reserved
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
