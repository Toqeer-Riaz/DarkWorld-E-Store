import Link from 'next/link'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const submit = async (event) => {
    event.preventDefault();
    const reqBody = { email, password }
    let res = await fetch("http://localhost:3000/api/login", {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: JSON.stringify(reqBody)
    })
    let data = await res.json();

    if (data.success) {
      toast.success('Successfully Logged In!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('InCourect Email OR Password!', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setemail('')
    setpassword('')
  }

  const change = (event) => {
    if (event.target.name == 'email') {
      setemail(event.target.value)
    }
    else if (event.target.name == 'password') {
      setpassword(event.target.value)
    }
  }
  return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <ToastContainer
          position="top-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto rounded-full" src="/favicon.ico.jpg" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={"/signup"}><a className="font-medium text-orange-600 hover:text-orange-500"> Signup</a></Link>
            </p>
          </div>
          <form onSubmit={submit} className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input value={email} onChange={change} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input value={password} onChange={change} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
              </div>

              <div className="text-sm">
                <Link href={"/forgot"}><a className="font-medium text-orange-600 hover:text-orange-500"> Forgot your password? </a></Link>
              </div>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-orange-500 group-hover:text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default login