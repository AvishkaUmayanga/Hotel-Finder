import React from 'react'

export default function HeadingTags({image, tag}) {
  return (
    <div>
      <div className=' gap-3 md:w-[150px] md:h-[60px] md:gap-5 bg-white flex items-center justify-center lg:gap-7 p-2 hover:bg-red-500 hover:text-white duration-500'>
        <img src={image} alt='fork' className=' lg:w-5 md:w-4'/>
          <p className='text-lg '>{tag}</p>
        </div>
    </div>
  )
}
