import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profile.jpg)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
            <div><p data-aos="fade-down">I am</p>
            <p data-aos="fade-down">Ahmed</p>
            <p data-aos="fade-down">Ali</p></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
