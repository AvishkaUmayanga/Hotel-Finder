import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GuestSaysData } from '../data/GuestData';

const responsive = {
    superLargeDesktop: {

        breakpoint: { max: 5000, min: 1300 },
        items: 1
      },
      desktop: {
        breakpoint: { max:1300, min: 920 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 920, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
  };
  

export default function GuestSays() {
  return (
    <div>
      <div className='flex flex-col gap-5 lg:gap-10'>
        <div>
          <h5 className='mb-2 text-gray-400 '>Best Directory Website</h5>
          <h3 className='md:text-3xl max-md:text-2xl '><span className='font-semibold '>Our</span> Guests Says</h3>  
        </div>
        <div className=' w-[450px] max-sm:w-full lg:w-[450px] md:w-[300px]'>
          <Carousel responsive={responsive} 
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}>
            {GuestSaysData?.map(({image, guestName, country, says},index)=>(
            <div key={index} className='flex gap-8 p-8 bg-white shadow-md max-md:p-5 md:gap-3'>
              <div className='flex '>
                <img src={image} alt={guestName} className='h-16 rounded-full w-36 max-lg:w-52 object-fit'/>
              </div>
              <div className='flex flex-col gap-4'>
                <div>
                  <p className='text-gray-500'>{says}</p>
                  </div>
                <div>
                  <h3>{guestName}</h3>
                  <p className='text-sm text-gray-500'>Guest from {country}</p>
                </div>
              </div>
            </div>
            ))}
          </Carousel>
          </div>
      </div>
    </div>
  )
}
