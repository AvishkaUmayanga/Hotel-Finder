import React from 'react'
import NavBar from '../components/NavBar'
import { mainGridData } from '../data/mainGridData'
import FunFact from '../components/FunFact'
import PopularHotels from '../components/PopularHotels'
import PopularRestaurants from '../components/PopularRestaurants'
import { tagsData } from '../data/HeadingTagData'
import HeadingTags from '../components/HeadingTags'
import FeaturedDestination from '../components/FeaturedDestination'
import ChooseUsAndGuestSays from '../components/ChooseUsAndGuestSays'
import SubscribeUs from '../components/SubscribeUs'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <div className='  bg-mainBg  bg-cover 2xl:h-[750px] h-[700px] w-full max-sm:h-[650px]  relative  border bg-[#0000001e]'>
        <div className=' 2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px]'>
          <NavBar/>
          <div className=' text-white gap-4 flex flex-col mt-[160px] max-xl:mt-[120px]  max-md:mt-20'>
            <h2 className='font-bold lg:text-7xl max-lg:text-6xl max-sm:text-4xl'>Explore</h2>
            <h3 className=' lg:text-6xl max-lg:text-5xl max-sm:text-3xl'>your amazing city</h3>
            <p className='text-lg md:text-xl text-gray-50'>Find great places to stay, eat, shop, or visit from local experts</p>
          </div>
          <div className='mt-20 '>
            <div className=' grid grid-cols-4 xl:w-[800px] lg:w-[730px]  max-lg:grid-cols-2 md:w-[400px]  max-lg:gap-y-5 max-sm:grid-cols-1 max-sm:w-[170px]'>
              {tagsData?.map(({image,tag},index)=> <HeadingTags image={image} tag={tag}/>)}
            </div>
          </div >
        </div>
      </div>
      <div>
        <div className=' md:h-[550px] w-full absolute  bg-blue-50 max-md:relative xmd:h-[500px] lg:h-[380px] '>
          <div className=' grid lg:grid-cols-4  md:grid-cols-2  border-red gap-10 lg:gap-5 xl:gap-8 md:absolute md:mt-[-90px] 2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px] grid-cols-1  py-[50px]'>
            {mainGridData?.map(({images, title, discribe}, index)=>
              <div key={index} className='flex flex-col items-center gap-5 px-10 py-8 text-center bg-white max-md:py-3 max-md:px-5'>
                <img src={images} alt='guarantee' className=' w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px]'/>
                <h3 className='text-xl '>{title}</h3>
                <p className='text-lg text-gray-500 '>{discribe}</p>
              </div>
            )}
          </div>   
        </div>
      </div>
      <FeaturedDestination/>
      <FunFact/>
      <PopularHotels/>
      <ChooseUsAndGuestSays/>
      <PopularRestaurants/>
      <SubscribeUs/>
      <Footer/>
    </div>
  )
}
