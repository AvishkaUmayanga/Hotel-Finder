import React from 'react'
import Card from './Card'
import { popularRestaurantsData } from '../data/PopularRestaurantsData'

export default function PopularRestaurants() {
  return (
    <div className=' my-40 2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px] '>
      <div className ='pb-14 max-md:pb-10'> 
        <h5 className='mb-2 text-lg text-gray-400 '>Special Offers</h5>
        <h3 className='md:text-3xl max-md:text-2xl '><span className='font-semibold '>Popular </span> Restaurants</h3>
      </div>
      <div>
        <div className='grid gap-5 2xl:grid-cols-4 lg:grid-cols-3 2xl:gap-10 sm:grid-cols-2 '>
          {popularRestaurantsData?.map(({image,restaurantName,rating,location},index)=>
            <Card key={index}  image={image}  hotelName={restaurantName} rating={rating} location={location}  /> 
          )}
        </div>
      </div>
    </div>
  )
}
