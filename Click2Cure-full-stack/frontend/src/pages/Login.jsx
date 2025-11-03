import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'Sign Up') {

      const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    } else {

      const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    }

  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8 overflow-hidden text-white shadow-2xl bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl">
        {/* ----- Header ----- */}
        <h2 className="text-4xl font-extrabold text-center">
          {state === 'Sign Up' ? 'Create Account' : 'Welcome'}
        </h2>
        <p className="text-center text-gray-200">
          {state === 'Sign Up' ? 'Sign up to get started' : 'Sign in to your account'}
        </p>

        {/* ----- Form Fields ----- */}
        <div className="space-y-6">
          {state === 'Sign Up' && (
            <div className="relative">
              <input id="name" name="name" type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full h-10 text-white placeholder-transparent bg-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-purple-400" />
              <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-sm">
                Full Name
              </label>
            </div>
          )}

          <div className="relative">
            <input id="email" name="email" type="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full h-10 text-white placeholder-transparent bg-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-purple-400" />
            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-sm">
              Email Address
            </label>
          </div>

          <div className="relative">
            <input id="password" name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full h-10 text-white placeholder-transparent bg-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-purple-400" />
            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-sm">
              Password
            </label>
          </div>
        </div>

        {/* ----- Submit Button ----- */}
        <button type="submit" className="w-full px-4 py-2 font-semibold text-white transition duration-200 bg-purple-500 rounded-md shadow-lg hover:bg-purple-700">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {/* ----- Toggle between Login / Signup ----- */}
        <div className="text-center text-gray-300">
          {state === 'Sign Up' ? (
            <p>
              Already have an account?{' '}
              <span
                onClick={() => setState('Login')}
                className="text-purple-300 cursor-pointer hover:underline"
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Don’t have an account?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className="text-purple-300 cursor-pointer hover:underline"
              >
                Sign up
              </span>
            </p>
          )}
        </div>
      </div>
    </form>
  )
}

export default Login