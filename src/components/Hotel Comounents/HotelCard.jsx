import React from 'react'
import StarRating from '../StarRating'
import { allHotelsData } from '../../data/AllHotelsData'

export default function HotelCard() {
    return (
      <div>
        <div className='grid grid-rows-2 gap-8 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2'>
          {allHotelsData?.map(({image,hotelName,rating,price,location},index)=>(
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
                <div className='flex items-center justify-between pt-2 '>
                  <h4 className='text-sm text-gray-500'>{location}, Sri lanka</h4>
                  <button className='px-2 py-1 text-sm text-white bg-green-400 rounded-lg'>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }


