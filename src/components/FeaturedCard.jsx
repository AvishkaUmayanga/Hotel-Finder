import React from 'react'

function FeaturedCard({image, city, listing,key}) {
  return (
    <div>
       <div key={key} className='  border flex flex-col md:w-[320px] 2xl:w-[270px]'>
          <div className=' h-[280px]'>
            <img src={image} alt='test' className='object-cover w-full h-full '/>
          </div>
          <div className='flex flex-col justify-center h-[80px]  bottom-0 pl-5 gap-1'>
            <h3 className='text-xl font-semibold '>{city}</h3>
            <p className='text-lg text-gray-500 '>{listing}</p>
          </div>
        </div> 
    </div>
  )
}

export default FeaturedCard