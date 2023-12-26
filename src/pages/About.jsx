import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import aboutImg from '../images/about_us.jpg'

export default function About() {
  const [isWhatWeDo, setIsWhatWeDo] = useState(true)
  const [isOurMission, setIsOurMission] = useState(false)
  const [isOurGoal, setIsOurGoal] = useState(false)
  
  const changeOurMission =() =>{
    setIsOurMission(true)
    setIsWhatWeDo(false)
    setIsOurGoal(false)
    console.log('isOurMission:', isOurMission);
  }

  const changeWhatWeDo =() =>{
    setIsOurMission(false)
    setIsWhatWeDo(true)
    setIsOurGoal(false)
  }

  const changeOurGoal =() =>{
    setIsOurMission(false)
    setIsWhatWeDo(false)
    setIsOurGoal(true)
  }
  return (
    <div>
      <div className='  bg-mainBg  bg-cover h-screen  w-full  border  bg-[#0000001e] flex items-center justify-center'>
        <div className=' 2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px]'>
          <NavBar/>
          <h2 className='text-3xl font-black text-white lg:text-5xl md:text-4xl'>About Us</h2>
        </div>
      </div>
      <div className=' bg-blue-50'>
        <div className=' py-40 2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px]  max-md:py-20'>
          <div className='flex gap-10 max-md:flex-col'>
            <div className='flex  gap-10 xl:w-[500px]  w-[320px] lg:w-[450px] md:w-[350px] max-md:w-full'>
              <img src={aboutImg} alt="about" className='object-fill ' />
            </div>
            <div className='flex flex-col   xl:w-[500px] xl:px-4 xl:gap-10 lg:w-[450px] lg:gap-6 md:w-[350px] max-md:w-full'>
              <div className='flex justify-center text-lg font-semibold text-gray-400 lg:flex xl:gap-4 max-lg:flex-col max-lg:mb-10'>
                <button className={`px-3 py-2  rounded-full ${isWhatWeDo ? 'bg-blue-400 text-white' : 'hover:text-black'}`} onClick={changeWhatWeDo}>What We Do</button>
                <button className={`px-3 py-2  rounded-full ${isOurMission ? 'bg-blue-400 text-white' : 'hover:text-black'}`} onClick={changeOurMission}>Our Mission</button>
                <button className={`px-3 py-2  rounded-full ${isOurGoal ? 'bg-blue-400 text-white' : 'hover:text-black'}`} onClick={changeOurGoal}>Our Goal</button>
              </div>
              <div className={`${isWhatWeDo ? 'flex flex-col' : 'hidden'}`}>
                <h3 className='mb-3 text-xl font-semibold'>Offering Reliable Hosting</h3>
                <p className='text-gray-500 '>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.<br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
              </div> 
              <div className={`${isOurMission ? 'flex flex-col' : 'hidden'}`}>
                <h3 className='mb-3 text-xl font-semibold'>Exceptional Web Solutions</h3>
                <p className='text-gray-500 '>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.<br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
              </div>
              <div className={`${isOurGoal ? 'flex flex-col' : 'hidden'}`}>
                <h3 className='mb-3 text-xl font-semibold'>Help Our Customer</h3>
                <p className='text-gray-500 '>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.<br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
