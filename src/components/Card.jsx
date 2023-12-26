import React from 'react'
import StarRating from './StarRating'

export default function Card({image,hotelName,rating,price,location,index}) {
  return (
    <div>
      <div key={index} className='border-2 '>
        <img src={image} alt={hotelName} className=' h-[230px]  object-fill w-full lg:h-[200px]'/>
        <div className='flex flex-col p-4'>
          <div className='flex justify-between '>
            <h3 className='text-lg font-semibold'>{hotelName}</h3> 
            <h4 className='text-lg text-blue-500 '>{price}</h4>
          </div>
          <div className='flex gap-5 py-3 '>
            <StarRating rating={rating}/>
            <h4 className='text-sm '>{rating} Rating</h4>
          </div>
          <div className='pb-2 border-b-2 '>
            <p className='text-base text-gray-500 '>Far far away, behind the word mountains, far from the countries</p>
          </div>
          <div className='pt-2 '>
            <h4 className='text-base text-gray-500'>{location}, Sri lanka</h4>
            </div>
          </div>
        </div>
    </div>
  )
}
