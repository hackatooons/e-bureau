import React from 'react'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>

 {/* OLD FOOTER START */}


      {/* <link
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
      </footer> */}

      {/* OLD FOOTER END  */}

      {/* NEW FOOTER START */}

      <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
            <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
                  <div className="mr-12 hidden lg:block">
                    <span>Get connected with us on social networks:</span>
                  </div>
              <div className="flex justify-center">

                  <a href="#!" className="mr-6 text-gray-600">
                    <InstagramIcon />
                  </a>

                  <a href="#!" className="mr-6 text-gray-600">
                      <FacebookIcon />
                  </a>

                  <a href="#!" className="mr-6 text-gray-600">
                    <GitHubIcon />
                  </a>

                  <a href="#!" className="mr-6 text-gray-600">
                    <TwitterIcon />
                  </a>

                  
              </div>
            </div>

          <div className=" mx-14 py-10 text-center md:text-left">
            <div className="grid grid-1 md:grid-cols-3 lg:grid-cols-4 gap-24">
              <div className="">
                <h6 className="
                    uppercase
                    font-semibold
                    mb-4
                    flex
                    items-center
                    justify-center
                    md:justify-start
                  ">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes"
                    className="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 47wQbNPTDJp9hMYdvogK2hAUiHsGeiybwaWe36bwtRQ3UTpYV7YuZ8FV5j9nauFCWwcjM6dTzpL5s2N79Rp5unwdMvc8ZKU102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
                    </path>
                  </svg>
                  E-Bureau
                </h6>
                <p className=''>
                  Let us together bring the Change <br></br>
                  File the report, then Sit back and relax, Let Cops do their work for you
                </p>
              </div>
              <div className="">
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                  MORE
                </h6>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">License</a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">Terms & Conditions</a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">Privacy Policy</a>
                </p>
                <p>
                  <a href="#!" className="text-gray-600">ContactUs</a>
                </p>
              </div>
              <div className="">
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                  Useful links
                </h6>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">About US</a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">General Diary</a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">Missing Report</a>
                </p>
                <p>
                  <a href="#!" className="text-gray-600">Crime Report</a>
                </p>
              </div>
              
            </div>
          </div>
          <div className="text-center p-6 bg-gray-200">
            <span>© 2022 Copyright:</span>
            <a className="text-gray-600 font-semibold" href="https://tailwind-elements.com/">E-Bureau</a>
          </div>
      </footer>
    </>
  )
}

export default Footer
