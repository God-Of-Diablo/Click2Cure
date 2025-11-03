import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)

    const [image, setImage] = useState(false)

    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

    // Function to update user profile data using API
    const updateUserProfileData = async () => {

        try {

            const formData = new FormData();

            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)

            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(false)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    return userData ? (
        <div className="flex items-center justify-center py-10">
            <div className="relative bg-primary text-white w-full max-w-4xl rounded-2xl shadow-[1px_5px_60px_0px_#100a886b] overflow-hidden flex flex-col md:flex-row items-center p-8 gap-8 transition-all duration-500">

                {/* Top Accent Border */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 h-[4px] bg-[#3405a3] rounded-b-2xl"></div>

                {/* Left Side - Profile Image */}
                <div className="flex flex-col items-center justify-center w-full md:w-1/3">
                    {isEdit ? (
                        <label htmlFor="image" className="relative cursor-pointer">
                            <img
                                className="w-36 h-36 object-cover rounded-full border-4 border-[#6b64f3] opacity-80"
                                src={image ? URL.createObjectURL(image) : userData.image}
                                alt=""
                            />
                            {!image && (
                                <img
                                    className="absolute bottom-0 right-0 w-7"
                                    src={assets.upload_icon}
                                    alt=""
                                />
                            )}
                            <input
                                onChange={(e) => setImage(e.target.files[0])}
                                type="file"
                                id="image"
                                hidden
                            />
                        </label>
                    ) : (
                        <img
                            className="w-36 h-36 object-cover rounded-full border-4 border-[#6b64f3]"
                            src={userData.image}
                            alt=""
                        />
                    )}

                    {/* Name */}
                    {isEdit ? (
                        <input
                            className="mt-4 bg-transparent border-b border-[#6b64f3] text-center text-xl font-semibold outline-none placeholder:text-gray-300 w-48"
                            type="text"
                            onChange={(e) =>
                                setUserData((prev) => ({ ...prev, name: e.target.value }))
                            }
                            value={userData.name}
                            placeholder="Enter name"
                        />
                    ) : (
                        <h2 className="mt-4 text-2xl font-semibold">{userData.name}</h2>
                    )}
                </div>

                {/* Right Side - Info Section */}
                <div className="flex-1 space-y-6 text-sm">
                    {/* CONTACT INFO */}
                    <div>
                        <p className="text-[#bdb8ff] underline text-sm">CONTACT INFORMATION</p>
                        <div className="grid grid-cols-[1fr_2fr] gap-y-3 mt-2">
                            <p className="font-medium">Email:</p>
                            <p className="text-[#d4ceff] break-all">{userData.email}</p>

                            <p className="font-medium">Phone:</p>
                            {isEdit ? (
                                <input
                                    className="bg-transparent border-b border-[#6b64f3] outline-none w-full"
                                    type="text"
                                    onChange={(e) =>
                                        setUserData((prev) => ({ ...prev, phone: e.target.value }))
                                    }
                                    value={userData.phone}
                                />
                            ) : (
                                <p className="text-[#d4ceff]">{userData.phone}</p>
                            )}

                            <p className="font-medium">Address:</p>
                            {isEdit ? (
                                <div className="flex flex-col space-y-1">
                                    <input
                                        className="bg-transparent border-b border-[#6b64f3] outline-none w-full"
                                        type="text"
                                        onChange={(e) =>
                                            setUserData((prev) => ({
                                                ...prev,
                                                address: { ...prev.address, line1: e.target.value },
                                            }))
                                        }
                                        value={userData.address.line1}
                                    />
                                    <input
                                        className="bg-transparent border-b border-[#6b64f3] outline-none w-full"
                                        type="text"
                                        onChange={(e) =>
                                            setUserData((prev) => ({
                                                ...prev,
                                                address: { ...prev.address, line2: e.target.value },
                                            }))
                                        }
                                        value={userData.address.line2}
                                    />
                                </div>
                            ) : (
                                <p className="text-[#d4ceff]">
                                    {userData.address.line1} <br /> {userData.address.line2}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* BASIC INFO */}
                    <div>
                        <p className="text-[#bdb8ff] underline text-sm">BASIC INFORMATION</p>
                        <div className="grid grid-cols-[1fr_2fr] gap-y-3 mt-2">
                            <p className="font-medium">Gender:</p>
                            {isEdit ? (
                                <select
                                    className="bg-[#6b64f3] text-white rounded px-2 py-1 outline-none"
                                    onChange={(e) =>
                                        setUserData((prev) => ({ ...prev, gender: e.target.value }))
                                    }
                                    value={userData.gender}
                                >
                                    <option value="Not Selected">Not Selected</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            ) : (
                                <p className="text-[#d4ceff]">{userData.gender}</p>
                            )}

                            <p className="font-medium">Birthday:</p>
                            {isEdit ? (
                                <input
                                    className="bg-transparent border-b border-[#6b64f3] outline-none w-full"
                                    type="date"
                                    onChange={(e) =>
                                        setUserData((prev) => ({ ...prev, dob: e.target.value }))
                                    }
                                    value={userData.dob}
                                />
                            ) : (
                                <p className="text-[#d4ceff]">{userData.dob}</p>
                            )}
                        </div>
                    </div>

                    {/* BUTTON */}
                    <div className="flex justify-end pt-4">
                        <button
                            onClick={() => {
                                if (isEdit) updateUserProfileData();
                                setIsEdit((prev) => !prev);
                            }}
                            className="bg-[#6b64f3] hover:bg-[#534bf3] px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300"
                        >
                            {isEdit ? "Save Information" : "Edit"}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    ) : null
}

export default MyProfile