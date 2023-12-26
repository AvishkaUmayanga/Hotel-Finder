import React from 'react'

export default function SubscribeUs() {
  return (
    <div className='mt-40 '>
      <div className="bg-gradient-to-r from-teal-500 to-teal-300  w-full flex flex-col items-center text-white text-center 2xl:px-[350px] py-40 xl:px-[200px] md:px-[150px] px-[40px] max-md:py-24">
        <div>
          <h3 className='font-semibold md:text-3xl max-md:text-2xl'>Subcribe to our Newsletter</h3>
          <p className='mt-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
        </div>
        <div className='flex justify-center mt-10'>
          <div className ='p-3 border md:pr-40 max-md:p-1'>
            <input type="text" className='w-full p-1 text-white placeholder-gray-100 bg-transparent rounded-md outline-none focus:outline-none' placeholder="Enter Your email" />
          </div>
          <button className='p-3 border max-md:p-1'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
