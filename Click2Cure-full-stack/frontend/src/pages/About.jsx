import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='font-semibold text-gray-700'>US</span></p>
      </div>

      <div className='flex flex-col gap-12 my-10 p-10 md:flex-row rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]'>
        <img className='w-full md:max-w-[360px] rounded-[30px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 text-sm text-gray-600 md:w-2/4'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='my-4 text-xl'>
        <p>WHY  <span className='font-semibold text-gray-700'>CHOOSE US</span></p>
      </div>

      <div className="flex flex-col gap-5 mb-20 md:flex-row">
        {/* ------- Card 1 ------- */}
        <div className="relative overflow-hidden flex-1 border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] text-gray-600 cursor-pointer rounded-3xl transition-all duration-500 bg-white group">
          <div className="absolute inset-0 z-10"></div>

          {/* Hover animation blobs */}
          <div className="absolute -top-32 -left-16 w-32 h-44 rounded-full bg-primary/30 transition-all duration-500 group-hover:-top-20 group-hover:-left-16 group-hover:w-[140%] group-hover:h-[140%]"></div>
          <div className="absolute transition-all duration-500 rounded-full -bottom-32 -right-16 w-36 h-44 bg-primary/40 group-hover:bottom-0 group-hover:right-0 group-hover:w-full group-hover:h-full group-hover:rounded-none"></div>

          {/* Content */}
          <div className="relative z-20">
            <b className="text-lg font-semibold">EFFICIENCY:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
        </div>

        {/* ------- Card 2 ------- */}
        <div className="relative overflow-hidden flex-1 border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] text-gray-600 cursor-pointer rounded-3xl transition-all duration-500 bg-white group">
          <div className="absolute inset-0 z-10"></div>
          <div className="absolute -top-32 -left-16 w-32 h-44 rounded-full bg-primary/30 transition-all duration-500 group-hover:-top-20 group-hover:-left-16 group-hover:w-[140%] group-hover:h-[140%]"></div>
          <div className="absolute transition-all duration-500 rounded-full -bottom-32 -right-16 w-36 h-44 bg-primary/40 group-hover:bottom-0 group-hover:right-0 group-hover:w-full group-hover:h-full group-hover:rounded-none"></div>

          <div className="relative z-20">
            <b className="text-lg font-semibold">CONVENIENCE:</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
        </div>

        {/* ------- Card 3 ------- */}
        <div className="relative overflow-hidden flex-1 border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] text-gray-600 cursor-pointer rounded-3xl transition-all duration-500 bg-white group">
          <div className="absolute inset-0 z-10"></div>
          <div className="absolute -top-32 -left-16 w-32 h-44 rounded-full bg-primary/30 transition-all duration-500 group-hover:-top-20 group-hover:-left-16 group-hover:w-[140%] group-hover:h-[140%]"></div>
          <div className="absolute transition-all duration-500 rounded-full -bottom-32 -right-16 w-36 h-44 bg-primary/40 group-hover:bottom-0 group-hover:right-0 group-hover:w-full group-hover:h-full group-hover:rounded-none"></div>

          <div className="relative z-20">
            <b className="text-lg font-semibold">PERSONALIZATION:</b>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About
