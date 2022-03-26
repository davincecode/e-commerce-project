import React from "react"

export default function contact() {
  return (
    <>
      <div className="w-full">
        <div className="bg-gradient-to-b bg-[#a19283] h-96"></div>
        <div className="max-w-5xl px-6 mx-auto mb-12 sm:px-6 lg:px-8">
          <div className="w-full p-8 bg-white rounded shadow sm:p-12 -mt-72">
            <p className="text-3xl font-bold leading-7 text-center">
              Contact me
            </p>
            <form action="" method="post">
              <div className="items-center mt-12 md:flex">
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="font-semibold leading-none">Name</label>
                  <input
                    type="text"
                    className="p-3 mt-4 leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-gray-700"
                  />
                </div>
                <div className="flex flex-col w-full mt-4 md:w-1/2 md:ml-6 md:mt-0">
                  <label className="font-semibold leading-none">Phone</label>
                  <input
                    type="email"
                    className="p-3 mt-4 leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-gray-700"
                  />
                </div>
              </div>
              <div className="items-center mt-8 md:flex">
                <div className="flex flex-col w-full">
                  <label className="font-semibold leading-none">Subject</label>
                  <input
                    type="text"
                    className="p-3 mt-4 leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:border-gray-700"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col w-full mt-8">
                  <label className="font-semibold leading-none">Message</label>
                  <textarea
                    type="text"
                    className="h-40 p-3 mt-4 text-base leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded focus:oultine-none focus:border-gray-400"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <button className="px-10 py-4 font-semibold leading-none text-white bg-gray-700 rounded mt-9 hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 focus:outline-none">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
