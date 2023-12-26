import React from 'react'
import { popularHotelsData } from '../data/PopularHotelsData'
import Card from './Card'

export default function PopularHotels() {
  return (
    <div className='px-5 my-40 lg:px-10 '>
      <div className ='pl-24 pb-14 max-md:pl-5 max-md:pb-10'> 
        <h5 className='mb-2 text-lg text-gray-400 '>Special Offers</h5>
        <h3 className='md:text-3xl max-md:text-2xl '><span className='font-semibold '>Popular </span> Hotels & Rooms</h3>
      </div>
      <div>
        <div className='grid gap-5 2xl:grid-cols-5 lg:grid-cols-4 2xl:gap-10 sm:grid-cols-2 '>
          {popularHotelsData?.map(({image,hotelName,rating,price,location},index)=>
            <Card key={index}  image={image}  hotelName={hotelName} rating={rating} price={price} location={location}  /> 
          )}
        </div>
      </div>
    </div>
  )
}
