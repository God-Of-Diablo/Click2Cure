import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='flex bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 group relative cursor-pointer overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform-gpu perspective-[1000px] hover:rotate-y-[10deg] hover:rotate-x-[10deg] hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]'>

            {/* Before layer */}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.1)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-full z-[1]'></div>

            {/* After layer */}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.1)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-full z-[1]'></div>

            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 relative z-[2]'>
                <div className='text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-5xl'>
                    <p>Book Appointment</p>
                    <p className='mt-4'>With 100+ Trusted Doctors</p>
                </div>
                <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all '>Create account</button>
            </div>

            {/* ------- Right Side ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative z-[2]'>
                <img className='absolute bottom-0 right-0 max-w-md w-80' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner