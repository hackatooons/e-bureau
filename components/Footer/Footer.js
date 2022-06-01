import React from 'react'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  let iconStyles = { color: "black", fontSize: "1.5em" };
  return (
    <>

      <footer className="text-center lg:text-left bg-gray-100 text-black-100 border-2 border-green-900">
            <div className="flex justify-center items-center lg:justify-between p-4 border-b border-green-900">
                  <div className="mr-12 hidden lg:block font-semibold">
                    <span>Get connected with us on social networks :</span>
                  </div>
              <div className="flex justify-center">

                  <a href="https://www.instagram.com/?hl=en" className="mr-6 text-black-600">
                    <InstagramIcon style={iconStyles} />                    
                  </a>

                  <a href="https://www.facebook.com/" className="mr-6 text-black-600">
                      <FacebookIcon style={iconStyles} />
                  </a>

                  <a href="https://github.com/" className="mr-6 text-black-600">
                    <GitHubIcon style={iconStyles} />
                  </a>

                  <a href="https://twitter.com/" className="mr-6 text-black-600">
                    <TwitterIcon style={iconStyles} />
                  </a>

              </div>
            </div>

          <div className=" mx-14 py-4 text-center md:text-left">
            <div className="grid grid-1 md:grid-cols-3 lg:grid-cols-3 gap-28">
              <div className="">
                <h6 className="
                    uppercase
                    font-semibold
                    mb-4
                    flex
                    items-center
                    justify-center
                    md:justify-start
                  " style={{fontSize:"25px"}}>
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
                  File the report, then Sit back and relax, Let Cops do their work for you.<br></br>
                  Creating an environment in which all residents may have their problems handled.
                </p>
              </div>
              <div className="">
                <h6 className="uppercase font-semibold mb-2 flex justify-center md:justify-start" style={{fontSize:"17px"}}>
                  MORE
                </h6>
                <p className="mb-2">
                  <Link href="/">
                    <a className="text-black-100">License</a>
                  </Link>
                </p>
                <p className="mb-2">
                  <Link href="/">
                    <a className="text-black-100">Terms & Conditions</a>
                  </Link>
                </p>
                <p className="mb-2">
                  <Link href="/">
                    <a className="text-black-100">Privacy Policy</a>
                  </Link>
                </p>
                <p>
                  <Link href="/contactUs">
                    <a className="text-black-100">ContactUs</a>
                  </Link>
                </p>
              </div>
              <div className="">
                <h6 className="uppercase font-semibold mb-2 flex justify-center md:justify-start" style={{fontSize:"17px"}}>
                  Useful links
                </h6>
                <p className="mb-2">
                  <Link href="/AboutUs">
                    <a className="text-black-100">About US</a>
                    </Link>
                </p>
                <p className="mb-2">
                  <Link href="/GeneralDiary">
                    <a className="text-black-100">General Diary</a>
                  </Link>
                </p>
                <p className="mb-2">
                  <Link href="/Missing">
                    <a className="text-black-100">Missing Report</a>
                  </Link>
                </p>
                <p>
                  <Link href="/crime">
                    <a className="text-black-100">Crime Report</a>
                  </Link>
                </p>
              </div>
              
            </div>
          </div>
          <div className="text-center p-4 bg-white-900">
            <span>© 2022 Copyright :</span>
            <Link href="/">
              <a className="text-blue-700 font-bold ml-1">E-Bureau</a>
            </Link>
            <span> | All Rights Reserved</span>
          </div>
      </footer>
    </>
  )
}

export default Footer
