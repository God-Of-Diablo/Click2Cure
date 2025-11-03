import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-between w-full max-w-6xl gap-10 p-6 mx-auto text-white bg-gradient-to-br from-sky-400 via-sky-400 to-violet-400 sm:p-10 rounded-2xl md:flex-row">

            {/* ---------- Left Section ---------- */}
            <div className="flex flex-col max-w-lg gap-6">
                <div>
                    <p className="text-sm tracking-wide text-gray-100 uppercase">Book appointment</p>
                    <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                        With Trusted Doctors
                    </h1>
                </div>

                <div className="flex flex-col items-center gap-4 text-sm font-light text-gray-100 sm:flex-row">
                    <img className="w-24" src={assets.group_profiles} alt="Group of doctors" />
                    <p>
                        Simply browse through our extensive list of trusted doctors,<br className="hidden sm:block" />
                        schedule your appointment hassle-free.
                    </p>
                </div>

                <a href="#speciality" className="flex items-center gap-2 px-5 py-3 text-black duration-300 bg-white rounded-lg hover:bg-gray-50 w-fit ease group">
                    <span>Book Appointment</span>
                    <svg viewBox="0 0 256 256" height="1em" width="1em" className="transition-transform duration-200 group-hover:translate-x-2 ease" xmlns="http://www.w3.org/2000/svg">
                        <path d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" fill="currentColor"></path>
                    </svg>
                </a>
            </div>

            {/* ---------- Right Section ---------- */}
            <div className="relative flex justify-center w-full md:justify-end md:w-1/2">
                <img className="w-[80%] md:w-[90%] lg:w-[80%] rounded-2xl shadow-lg" src={assets.header_img} alt="Doctor illustration" />
            </div>

        </div>
    )
}

export default Header