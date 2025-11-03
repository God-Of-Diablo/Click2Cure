import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className='fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-white border-b sm:px-10'>
      <div className='flex items-center gap-2 text-xs'>
        <img onClick={() => navigate('/')} className='cursor-pointer w-36 sm:w-40' src={assets.admin_logo} alt="" />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={() => logout()} className='relative flex items-center justify-start overflow-hidden transition-all duration-200 rounded-full shadow-lg cursor-pointer bg-primary group w-11 h-11 hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1'>
        <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
          <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
        </div>
        <div className="absolute text-lg font-semibold text-white transition-all duration-300 transform translate-x-full opacity-0 right-5 group-hover:translate-x-0 group-hover:opacity-100">
          Logout
        </div>
      </button>
    </div>
  )
}

export default Navbar