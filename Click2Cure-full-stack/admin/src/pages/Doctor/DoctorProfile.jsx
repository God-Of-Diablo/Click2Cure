import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const DoctorProfile = () => {

  const { dToken, profileData, setProfileData, getProfileData } = useContext(DoctorContext)
  const { currency, backendUrl } = useContext(AppContext)
  const [isEdit, setIsEdit] = useState(false)

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        about: profileData.about,
        available: profileData.available
      }

      const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, { headers: { dToken } })

      if (data.success) {
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])

  return profileData && (
    <div className="mt-[130px] flex justify-center px-4">
      <div className="card w-full max-w-3xl bg-gradient-to-br from-blue-500 to-pink-500 rounded-[44px] shadow-xl p-8 sm:p-10 text-white relative overflow-hidden">

        {/* ---------- Profile Header ---------- */}
        <div className="flex flex-col items-center gap-6 mb-6 sm:flex-row sm:items-start">
          <img
            className="object-cover w-32 h-32 shadow-md sm:w-36 sm:h-36 rounded-3xl bg-white/90"
            src={profileData.image}
            alt="Doctor"
          />
          <div className="flex flex-col gap-2 text-white/90">
            <h2 className="text-3xl font-semibold tracking-tight">{profileData.name}</h2>
            <p className="text-sm sm:text-base">{profileData.degree} - {profileData.speciality}</p>
            <button className="px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm">
              {profileData.experience}
            </button>
          </div>
        </div>

        {/* ---------- About Section ---------- */}
        <div className="p-4 mb-4 bg-white/20 backdrop-blur-sm sm:p-5 rounded-2xl">
          <p className="mb-2 font-semibold text-white">About</p>
          {isEdit ? (
            <textarea
              onChange={(e) => setProfileData(prev => ({ ...prev, about: e.target.value }))}
              value={profileData.about}
              rows={5}
              className="w-full p-2 text-gray-800 rounded-md outline-none"
            />
          ) : (
            <p className="leading-relaxed text-white/90">{profileData.about}</p>
          )}
        </div>

        {/* ---------- Fee & Address ---------- */}
        <div className="flex flex-col gap-3 p-4 mb-4 bg-white/20 backdrop-blur-sm sm:p-5 rounded-2xl">
          <p className="font-semibold text-white">Appointment Fee:</p>
          {isEdit ? (
            <input
              type="number"
              onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))}
              value={profileData.fees}
              className="p-2 text-gray-800 rounded-md outline-none"
            />
          ) : (
            <p className="text-white/90">{currency} {profileData.fees}</p>
          )}

          <div>
            <p className="mb-1 font-semibold text-white">Address:</p>
            {isEdit ? (
              <>
                <input
                  type="text"
                  onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                  value={profileData.address.line1}
                  className="w-full p-2 mb-2 text-gray-800 rounded-md outline-none"
                />
                <input
                  type="text"
                  onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                  value={profileData.address.line2}
                  className="w-full p-2 text-gray-800 rounded-md outline-none"
                />
              </>
            ) : (
              <p className="text-white/90">
                {profileData.address.line1}<br />{profileData.address.line2}
              </p>
            )}
          </div>
        </div>

        {/* ---------- Availability ---------- */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))}
            checked={profileData.available}
            className="w-4 h-4 cursor-pointer accent-white"
          />
          <label className="text-white/90">Available</label>
        </div>

        {/* ---------- Edit / Save Buttons ---------- */}
        <div className="flex justify-end">
          {isEdit ? (
            <button
              onClick={updateProfile}
              className="px-6 py-2 font-medium text-blue-600 transition-all bg-white rounded-full shadow hover:opacity-90"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(prev => !prev)}
              className="px-6 py-2 font-medium text-blue-600 transition-all bg-white rounded-full shadow hover:opacity-90"
            >
              Edit
            </button>
          )}
        </div>

      </div>
    </div>
  )
}

export default DoctorProfile