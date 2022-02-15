import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../media/logo.png'
import googleLogo from '../media/google_logo.png'

const Login = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center mx-2'>
      <img src={logo} alt='logo' className='h-44 rounded-full items-center block' />
      <h2 className='m-3 text-3xl font-extrabold text-gray-800'>Buenos Aires</h2>
      <form className='mt-8'>
        <div>
          <input
            className='appearance-none px-3 py-2 relative block border w-96 border-gray-400 rounded-t-lg text-gray-900 focus:outline-none'
            type="email"
            placeholder="Email"
            required />
          <input
            className='appearance-none w-96 px-3 py-2 relative block border border-gray-400 rounded-b-lg text-gray-900 focus:outline-none'
            type="password"
            placeholder='Password'
            required />
        </div>
        <div className='flex justify-between text-sm my-3'>
          <div>
            <label htmlFor='remember' className='mx-1'>
              <input name='remember' type="checkbox" />
              Remember me
            </label>
          </div>
          <div className='mx-1'>
            <Link to="/" className='underline'>
              Forgot credentials?
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-center my-5'>
          <Link to="/admin">
            <div className='bg-indigo-600 p-2 w-96 text-center text-white rounded-lg shadow-lg hover:bg-indigo-500 hover:cursor-pointer'>
              <button type='submit'>Login</button>
            </div>
          </Link>
          <div className='my-2 font-bold'>
            ------------ O ------------
          </div>
          <div className='bg-gray-400 p-2 w-96 text-center text-gray-900 rounded-lg shadow-lg hover:bg-gray-500 hover:cursor-pointer'>
            <button>
              <div className="flex items-center justify-center">
                <img className='h-5 w-5' src={googleLogo} alt="logo-google" />
                <span className='mx-4'>Continue with Google</span>
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login