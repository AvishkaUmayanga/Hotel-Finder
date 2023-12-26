import React from 'react'
import xImg from '../images/footer images/x-twitter.svg'
import facebookImg from '../images/footer images/facebook-f.svg'
import instaImg from '../images/footer images/instagram.svg'
import locationIcon from '../images/footer images/location-dot-solid.svg'
import phoneIcon from '../images/footer images/phone-solid.svg'
import mailIcon from '../images/footer images/envelope-solid.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className=' bg-[#222831] 2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px]'>
      <div className='grid grid-cols-1 gap-16 py-20 text-white lg:gap-36 lg:grid-cols-3 md:grid-cols-2 md:gap-20'>
        {/* Social media */}
        <div className='flex flex-col gap-6 '>
          <h3 className='text-xl'>HFinder</h3>
          <p className='text-gray-400 '>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className='flex gap-4'>
            <Link to='#'>
              <div className='flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full'>
                <img src={xImg} alt="x" className='w-4 h-4' />
              </div>
            </Link>   
            <Link to='#'>
              <div className='flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full'>
                <img src={facebookImg} alt="facebook" className='w-4 h-4'/>
              </div>
            </Link> 
            <Link to='#'> 
              <div className='flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full'>
                <img src={instaImg} alt="instagram" className='w-4 h-4' />  
              </div>
            </Link> 
          </div>
        </div>
        {/* Customer Support */}
        <div className='flex flex-col gap-6 '>
          <h3 className='text-xl '>Customer Support</h3>
          <div className='flex flex-col gap-4 text-gray-400'>
            <Link to='#'>FAQ</Link>
            <Link to='#'>Payment Option</Link>
            <Link to='#'>Booking Tips</Link>
            <Link to='#'>How it works</Link>
            <Link to='#'>Contact Us</Link>
          </div>
        </div>
        {/* Have a Questions */}
        <div className='flex flex-col gap-6 '>
          <h3 className='text-xl '>Have a Questions?</h3>
            <div className='flex gap-5 '>
              <img src={locationIcon} alt="location icon" className='flex self-start pt-1'/>
              <p className='text-gray-400 '>203 Fake St. Mountain View,<br></br> Passara, Badulla,<br></br>Sri lanka</p>
            </div>
            <div className='flex gap-5 '>
              <img src={phoneIcon} alt="phone icon" className='flex self-start pt-1'/>
              <p className='text-gray-400 '>+94 764009627</p>
            </div>
            <div className='flex gap-5 '>
              <img src={mailIcon} alt="mail icon" className='flex self-start pt-1'/>
              <p className='text-gray-400 '>	info@hfinder.com</p>
            </div>
        </div>
      </div>
      <div className='pb-4 text-center text-gray-400'>
        <p>Copyright ©2023 All rights reserved</p>
      </div>
    </div>
  )
}
