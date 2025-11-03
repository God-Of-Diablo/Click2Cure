import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'

const Sidebar = () => {

  const { dToken } = useContext(DoctorContext)
  const { aToken } = useContext(AdminContext)

  return (
    <div className="fixed left-0 h-screen mt-10 overflow-y-auto bg-white border-r top-16">
      {aToken && (
        <ul className="text-[#515151] flex flex-col gap-2 px-3 md:px-5">
          <NavLink
            to={"/admin-dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-5 rounded-full font-semibold transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.05] ${isActive
                ? "bg-gradient-to-r from-purple-500 to-purple-800 text-white shadow-purple-400"
                : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-purple-500 hover:to-purple-800 hover:text-white"
              }`
            }
          >
            <img className="w-5" src={assets.home_icon} alt="" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>

          <NavLink
            to={"/all-appointments"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-5 rounded-full font-semibold transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.05] ${isActive
                ? "bg-gradient-to-r from-purple-500 to-purple-800 text-white shadow-purple-400"
                : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-purple-500 hover:to-purple-800 hover:text-white"
              }`
            }
          >
            <img className="w-5" src={assets.appointment_icon} alt="" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink
            to={"/add-doctor"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-5 rounded-full font-semibold transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.05] ${isActive
                ? "bg-gradient-to-r from-purple-500 to-purple-800 text-white shadow-purple-400"
                : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-purple-500 hover:to-purple-800 hover:text-white"
              }`
            }
          >
            <img className="w-5" src={assets.add_icon} alt="" />
            <p className="hidden md:block">Add Doctor</p>
          </NavLink>

          <NavLink
            to={"/doctor-list"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-5 rounded-full font-semibold transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.05] ${isActive
                ? "bg-gradient-to-r from-purple-500 to-purple-800 text-white shadow-purple-400"
                : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-purple-500 hover:to-purple-800 hover:text-white"
              }`
            }
          >
            <img className="w-5" src={assets.people_icon} alt="" />
            <p className="hidden md:block">Doctors List</p>
          </NavLink>
        </ul>
      )}

      {dToken && (
        <ul className="text-[#515151] mt-5 flex flex-col gap-2 px-3 md:px-5">
          <NavLink
            to={"/doctor-dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-5 rounded-full font-semibold transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.05] ${isActive
                ? "bg-gradient-to-r from-purple-500 to-purple-800 text-white shadow-purple-400"
                : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-purple-500 hover:to-purple-800 hover:text-white"
              }`
            }
          >
            <img className="w-5" src={assets.home_icon} alt="" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>

          <NavLink
            to={"/doctor-appointments"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-5 rounded-full font-semibold transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.05] ${isActive
                ? "bg-gradient-to-r from-purple-500 to-purple-800 text-white shadow-purple-400"
                : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-purple-500 hover:to-purple-800 hover:text-white"
              }`
            }
          >
            <img className="w-5" src={assets.appointment_icon} alt="" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink
            to={"/doctor-profile"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-5 rounded-full font-semibold transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.05] ${isActive
                ? "bg-gradient-to-r from-purple-500 to-purple-800 text-white shadow-purple-400"
                : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-purple-500 hover:to-purple-800 hover:text-white"
              }`
            }
          >
            <img className="w-5" src={assets.people_icon} alt="" />
            <p className="hidden md:block">Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  )
}

export default Sidebar