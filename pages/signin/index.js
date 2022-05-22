import React from 'react'
import { useFormik, Form, FormikProvider } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function index() {
  const [cls, setCls] = React.useState("black");
  const [passwordShown, setPasswordShown] = React.useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setCls((cls) => (cls === "red" ? "black" : "red"));
  };
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      console.log(values)
    },
  })

  const { errors, setErrors, touched, values, handleSubmit, getFieldProps } =
    formik

  return (
    <>
    <style>{`
        .red {color: red}
        .black {color: black}
      `}</style>
      <Header />
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
          <h1 className="text-gray-800 block text-3xl font-extrabold font-title py-4">
            Sign In
          </h1>
          <div className="relative sm:max-w-sm w-full">
            <div className="card shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-9"></div>
            <div className="card shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-9"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <FormikProvider value={formik}>
                <Form className="mt-10" noValidate onSubmit={handleSubmit}>
                  <div className="mt-4">
                    <label
                      for="price"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <input
                        type="text"
                        name="email"
                        class="focus:ring-blue-500 focus:border-blue-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter Email"
                        {...getFieldProps('email')}
                      />
                    </div>
                    <strong class="text-red-500 text-xs">
                      {touched.email && errors.email}
                    </strong>
                  </div>
                  <div className="mt-4">
                    <label
                      for="price"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <input
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        class="focus:ring-blue-500 focus:border-blue-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter Strong Password"
                        {...getFieldProps('password')}
                      />
                      <button type="button" className={cls} style={{position: 'absolute',right: 7,top: 10,}} onClick={togglePassword}>{eye}</button>{" "}
                    </div>
                    <strong class="text-red-500 text-xs">
                      {touched.password && errors.password}
                    </strong>
                  </div>
                  <br />
                  <button
                    className={`bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 `}
                    type="submit"
                  >
                    Sign In
                  </button>
                  <br />
                  <br />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    Not registered yet? Register&nbsp;<a href="#"><b>here </b> </a>{' '}
                  </div>
                </Form>
              </FormikProvider>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
