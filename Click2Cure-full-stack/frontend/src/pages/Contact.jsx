import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='font-semibold text-gray-700'>US</span></p>
      </div>

      <div className='flex justify-center my-10 mb-28'>
        <div className='flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-[800px] p-10 rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]'>

          {/* -------- Image Section -------- */}
          <img
            className='w-full md:max-w-[300px] rounded-[25px] object-cover'
            src={assets.contact_image}
            alt="Contact"
          />

          {/* -------- Text Section -------- */}
          <div className='flex flex-col items-start justify-center gap-6 text-sm'>
            <p className='text-lg font-semibold text-gray-600'>OUR OFFICE</p>
            <p className='text-gray-500'>
              54709 Willms Station <br /> Suite 350, Washington, USA
            </p>
            <p className='text-gray-500'>
              Tel: (415) 555-0132 <br /> Email: greatstackdev@gmail.com
            </p>
            <p className='text-lg font-semibold text-gray-600'>CAREERS AT PRESCRIPTO</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='px-8 py-4 text-sm transition-all duration-500 border border-black rounded-full hover:bg-black hover:text-white'>
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Contact
