import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'
import axios from 'axios'
import { toast } from 'react-toastify'

const Appointment = () => {

    const { docId } = useParams()
    const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [docInfo, setDocInfo] = useState(false)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const navigate = useNavigate()

    const fetchDocInfo = async () => {
        const docInfo = doctors.find((doc) => doc._id === docId)
        setDocInfo(docInfo)
    }

    const getAvailableSolts = async () => {

        setDocSlots([])

        // getting current date
        let today = new Date()

        for (let i = 0; i < 7; i++) {

            // getting date with index 
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            // setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            // setting hours 
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = [];


            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                let day = currentDate.getDate()
                let month = currentDate.getMonth() + 1
                let year = currentDate.getFullYear()

                const slotDate = day + "_" + month + "_" + year
                const slotTime = formattedTime

                const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

                if (isSlotAvailable) {

                    // Add slot to array
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime
                    })
                }

                // Increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            setDocSlots(prev => ([...prev, timeSlots]))

        }

    }

    const bookAppointment = async () => {

        if (!token) {
            toast.warning('Login to book appointment')
            return navigate('/login')
        }

        const date = docSlots[slotIndex][0].datetime

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        const slotDate = day + "_" + month + "_" + year

        try {

            const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })
            if (data.success) {
                toast.success(data.message)
                getDoctosData()
                navigate('/my-appointments')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    useEffect(() => {
        if (doctors.length > 0) {
            fetchDocInfo()
        }
    }, [doctors, docId])

    useEffect(() => {
        if (docInfo) {
            getAvailableSolts()
        }
    }, [docInfo])

    return docInfo ? (
        <div>

            {/* ---------- Doctor Details with Booking Slots ----------- */}
            <div className="w-full max-w-4xl mx-auto overflow-hidden text-white shadow-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl">
                {/* Doctor Info Header */}
                <div className="flex flex-col items-center gap-6 p-6 sm:flex-row">
                    <img
                        className="object-cover w-32 h-32 border-4 rounded-full shadow-md sm:w-40 sm:h-40 border-white/30"
                        src={docInfo.image}
                        alt={docInfo.name}
                    />
                    <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                        <h2 className="flex items-center gap-2 text-2xl font-semibold">
                            {docInfo.name}
                            <img className="w-5 h-5" src={assets.verified_icon} alt="Verified" />
                        </h2>
                        <p className="mt-1 text-white/80">
                            {docInfo.degree} — {docInfo.speciality}
                        </p>
                        <button className="px-3 py-1 mt-3 text-sm transition border rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
                            {docInfo.experience}
                        </button>
                    </div>
                </div>

                {/* About Section */}
                <div className="p-6 text-gray-800 bg-white shadow-inner rounded-t-3xl">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold text-gray-700">About</p>
                        <img className="w-4 h-4" src={assets.info_icon} alt="Info" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {docInfo.about}
                    </p>

                    <div className="flex items-center justify-between pt-3 mt-4 text-sm border-t">
                        <p className="font-medium text-gray-700">
                            Appointment Fee:
                            <span className="ml-1 font-semibold text-gray-900">
                                {currencySymbol}
                                {docInfo.fees}
                            </span>
                        </p>
                    </div>

                    {/* ---------- Booking Slots Section ---------- */}
                    <div className="mt-8">
                        <p className="mb-3 text-lg font-semibold text-gray-700">Booking Slots</p>

                        {/* Days Scroll */}
                        <div className="flex items-center w-full gap-3 overflow-x-auto scrollbar-hide">
                            {docSlots.length > 0 &&
                                docSlots.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSlotIndex(index)}
                                        className={`flex flex-col items-center justify-center min-w-16 px-3 py-5 rounded-xl cursor-pointer transition-all duration-300 
                                ${slotIndex === index
                                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                                                : 'border border-gray-300 text-gray-600 bg-white hover:bg-gray-50'
                                            }`}
                                    >
                                        <p className="text-sm font-semibold">
                                            {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                                        </p>
                                        <p className="text-xs">{item[0] && item[0].datetime.getDate()}</p>
                                    </div>
                                ))}
                        </div>

                        {/* Time Slots */}
                        <div className="flex items-center w-full gap-3 mt-4 overflow-x-auto scrollbar-hide">
                            {docSlots.length > 0 &&
                                docSlots[slotIndex]?.map((item, index) => (
                                    <p
                                        key={index}
                                        onClick={() => setSlotTime(item.time)}
                                        className={`text-sm font-medium px-5 py-2 rounded-full flex-shrink-0 cursor-pointer transition-all duration-300 
                                ${item.time === slotTime
                                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                                                : 'text-gray-600 border border-gray-300 bg-white hover:bg-gray-50'
                                            }`}
                                    >
                                        {item.time.toLowerCase()}
                                    </p>
                                ))}
                        </div>

                        {/* Book Button */}
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={bookAppointment}
                                className="px-8 py-3 text-sm font-semibold text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:scale-105"
                            >
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Listing Releated Doctors */}
            <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
        </div>
    ) : null
}

export default Appointment