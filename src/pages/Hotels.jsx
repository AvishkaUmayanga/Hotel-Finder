import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HotelCard from '../components/Hotel Comounents/HotelCard'


export default function Hotels() {
  return (
    <div>
      <div className='  bg-mainBg  bg-cover h-screen  w-full bg-[#0000001e] flex items-center justify-center'>
        <div className=' 2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px]'>
          <NavBar/>
          <h2 className='text-3xl font-black text-white lg:text-5xl md:text-4xl'>Hotels</h2>
        </div>
      </div>
      <div className=' 2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px] py-40'>
        <div  className='w-full '>
          <HotelCard/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
