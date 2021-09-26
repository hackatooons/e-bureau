import React from 'react'

const Form = ({ title, fields, onsubmit }) => {
  const field = fields
  return (
    <div className="relative font-medium md:h-screen flex items-center content-center">
      <div className="mr-auto ml-auto w-full">
        <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-1 text-center">
          <h1 className="text-gray-800 block text-3xl font-extrabold font-title">
            {title}
          </h1>
        </div>
        <div className="w-full max-w-md mr-auto ml-auto mt-4">
          <div className="bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto">
            <div className="mb-4">
              {field.map(({ name, type, hintText, handler, value }) => (
                <React.Fragment key={name}>
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor={name}
                  >
                    {name}
                  </label>
                  <input
                    className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
                    id={name}
                    type={type}
                    placeholder={hintText}
                    onChange={(e) => handler(e.target.value)}
                    value={value}
                  />
                </React.Fragment>
              ))}
            </div>
            <div className="mb-6">
              <button
                type="button"
                className="bg-indigo-500 hover:bg-indigo-600 shadow-lg text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all"
                onClick={(e) => onsubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
