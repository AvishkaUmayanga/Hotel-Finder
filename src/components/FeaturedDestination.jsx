import React from 'react'
import FeaturedSlider from './FeaturedSlider'

export default function FeaturedDestination() {
  return (
    <div>
      <div className=' border py-40 2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px] lg:mt-[380px] xmd:mt-[500px] md:mt-[550px] max-md:py-20'>
        <div className='flex flex-col '>
          <div className='mb-10 '>
            <h5 className='mb-2 text-lg text-gray-400 '>Featured</h5>
            <h3 className='md:text-3xl max-md:text-2xl '><span className='font-semibold '>Featured</span> Destinations</h3>
          </div>
          <FeaturedSlider/>
        </div>
      </div>
    </div>
  )
}
