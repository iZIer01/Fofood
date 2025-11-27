import React from 'react'

// Images
import hero from "../../assets/Images/hero-shape.png"
import cupcake from "../../assets/Images/cupCake&Dou.png"

//Components 
import LearnMore from '../Button/LearnMore'

const Hero = () => {
  return (
    <section className='relative w-full overflow-hidden bg-[#FFF4F5]'>
        <img
            src={hero} 
            alt='background'
            className='w-full object-cover'
        />
        
        {/* Floating Cupcake & Doughnut */}
        <img 
            src={cupcake}
            alt='floating Deserts'
            className='absolute top-27 left-1/2 -translate-x-1/2 w-[93%] drop-shadow-xl'
        />

        {/*Hero Text */}
        <div className='px-3 font-semibold w-96'>
            <h3 className=' text-[#DB6885] font-[Fredoka] text-[19px]'>Welcome to Fofood</h3>
            <p className='font-[Figtree] font-bold text-4xl pt-1.5'>Super Delicious Food Special for You </p>
            <p className='pt-2.5 text-[17.9px] font-light font-[Figtree]'>Order your favorites food from anywhere and get delivery at your door</p>
        
            {/* Action Buttons */}
            <div className=' flex justify-between gap-0 w-full py-4'>
                <button className='text-white bg-[#DB6885] rounded-full w-36 h-13 drop-shadow-black cursor-pointer'>Order Now</button>
                <LearnMore/>
            </div>
        </div>
    </section>
  )
}

export default Hero