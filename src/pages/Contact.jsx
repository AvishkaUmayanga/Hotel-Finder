import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import locationImg from '../images/contact-location.png'

export default function Contact() {
  return (
    <div>
      <div className='  bg-mainBg  bg-cover h-screen  w-full  border  bg-[#0000001e] flex items-center justify-center'>
        <div className=' 2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px]'>
          <NavBar/>
          <h2 className='text-3xl font-black text-white lg:text-5xl md:text-4xl'>Contact</h2>
        </div>
      </div>
      <div>
        <div className=' py-24  2xl:px-[200px] xl:px-[120px] lg:px-[100px] md:px-[50px] px-[30px]  max-md:py-20'>
          <div className='flex gap-10 max-md:flex-col'>
            <div className='flex  gap-10 xl:w-[500px]  w-[320px]  lg:w-[450px] md:w-[350px] max-md:w-full'>
              <form className='flex flex-col w-full gap-5'>
                <input type="text" name="name" id="yourName" placeholder='Your Name' className='p-3 border'/>
                <input type="email" name="email" id="yourEmail" placeholder='Your Email' className='p-3 border'/>
                <input type="text" name="subject" id="yourSubject" placeholder='Subject' className='p-3 border'/>
                <textarea name="message" id="yourMessage"  rows="5" placeholder='Message ' className='p-3 border'></textarea>
                <button className=' py-3 bg-red-400 w-[250px] rounded-full text-white text-lg hover:bg-white hover:text-black  max-md:w-full focus:outline-red-400 focus:border-red-400'>Send Message</button>
              </form>
            </div>
            <div className='flex flex-col  xl:w-[500px] xl:px-4 xl:gap-10 lg:w-[450px] lg:gap-6 md:w-[350px] max-md:w-full'>
              <img src={locationImg} alt="about" className='object-fill xl:h-[500px] h-[400px]' />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
