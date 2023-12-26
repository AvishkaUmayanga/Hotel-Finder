import React from 'react'

export default function WhyCooseUs() {
  return (
    <div>
      <div className='flex flex-col gap-10 xl:w-[500px]  w-[320px]'>
        <div>
          <h5 className='mb-2 text-gray-400 '>Best Directory Website</h5>
          <h3 className='md:text-3xl max-md:text-2xl '><span className='font-semibold '>Why</span> Choose Us?</h3>  
        </div>
        <div className='flex flex-col gap-3 text-gray-500'>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p> 
        </div>
        <div className='text-red-500 '>
          <button className='px-4 py-3 border-2 border-red-500 rounded-full'>Read More</button>
        </div>
      </div>
    </div>
  )
}
