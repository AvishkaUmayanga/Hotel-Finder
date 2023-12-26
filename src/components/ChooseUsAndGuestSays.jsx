import React from 'react'
import WhyCooseUs from './WhyCooseUs'
import GuestSays from './GuestSays'

export default function ChooseUsAndGuestSays() {
  return (
    <div className=' bg-blue-50'>
       <div className=' py-24  2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px]   md:mt-[200px] max-md:py-20'>
         <div className='flex 2xl:gap-[150px] lg:gap-[100px] gap-[50px] max-md:flex-col max-md:gap-[130px]'>
            <div>
              <WhyCooseUs/>
            </div>
            <div>
              <GuestSays/>
            </div>
         </div>
       </div>
    </div>
  )
}
