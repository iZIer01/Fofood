import React from 'react'

//Images
import man from "../../assets/Images/ExploreItem/man.jpeg"
import girl from "../../assets/Images/ExploreItem/gir.jpeg" 

import image from "../../assets/Images/Most Popular Food/image.png"
import image1 from "../../assets/Images/Most Popular Food/image (1).png"
import image2 from "../../assets/Images/Most Popular Food/image (2).png"
import image3 from "../../assets/Images/Most Popular Food/image (3).png"
import image4 from "../../assets/Images/Most Popular Food/image (4).png"
import image5 from "../../assets/Images/Most Popular Food/image (5).png"
import image6 from "../../assets/Images/Most Popular Food/image (6).png"
import image7 from "../../assets/Images/Most Popular Food/image (7).png"


// Components
import LearnMore from '../Button/LearnMore'

// Icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const AboutUsSection = () => {

  // 
  const popularFoods = [
    {
      id:1,
      image:image,
      title:"Chococheese Cake",
      price:"2.5"
    },{
      id:2,
      image:image1,
      title:"Pink Donuts",
      price:"2.5"
    },{
      id:3,
      image:image2,
      title:"Choco Cake",
      price:"2.5"
    },{
      id:4,
      image:image3,
      title:"Sweet Cake",
      price:"2.5"
    },{
      id:5,
      image:image4,
      title:"Pink Sweet",
      price:"2.5"
    },{
      id:6,
      image:image5,
      title:"Choco Cookiess",
      price:"2.5"
    },{
      id:7,
      image:image6,
      title:"Sweet Donuts",
      price:"2.5"
    },{
      id:8,
      image:image7,
      title:"Sweet Choco",
      price:"2.5"
    }


  ] 

  return (
    <section className='px-5'>

      {/* Card Of man and girl */}
      <div className=' grid grid-cols-2 place-items-center gap-6'>
          <img 
              src={man}
              alt='chief with cupcake'   
              className=' w-full rounded-2xl object-contain'
          />
          
          <img 
              src={girl}
              alt='girl with cupcake'   
              className=' w-full rounded-2xl object-contain mt-17'
          />
      </div>

      {/* About Us Introduction */}
      <section className=' font-[Figtree] my-7'>
        <h3 className='text-[#DB6885] text-[20px] font-semibold  '>About us</h3>
        <h2 className='text-[28px] font-bold py-4'>Welcome to Fofood</h2>
        <p className=' font-light text-[#707070] text-[17.6px]'>
          Welcome to Fofood, where we‘re committed to combating food deserts. Our goal is to ensure everyone has access to fresh, healthy, and affordable food, regardless of their location. Join us in creating a brighter future for all.
        </p>
        
        {/* Read More Button */}
        <div className='mt-4'>  
          <LearnMore text='Read More'/>
        </div>
      </section>

      {/* Popular Menu Section */}
      <section className='w-full flex flex-col justify-center items-center py-16 font-[Fredoka]'>
        <h2 className='text-[#DB6885] text-[20px] font-semibold '>Popular Menu</h2>
        <h3 className='text-[28px] font-[Figtree] font-bold'>Most Popular Food</h3>
        
        <div className='grid grid-cols-2 place-items-center py-8 gap-12'>

          {
          popularFoods.map((food,index)=>{
            return(
                  <div key={index} className=''>
                    <img 
                      src={food.image}
                      alt={food.title}
                      className='w-36 h-36 object-contain mx-auto'
                    />

                    {/* Food Description */}
                    <div className='flex flex-col justify-center items-center  font-[fredoka]'>
                      <h3 className='text-[18px] font-semibold'>{food.title}</h3>
                      
                      <h3 className='text-[#DB6885] font-semibold py-2'>N${food.price}</h3>
                    </div>

                    {/*Quick action Button  */}
                    <div className='flex items-center justify-center gap-4'>
                      <button className='text-[#DB6885] rounded-full w-10 h-10 cursor-pointer'>
                        <FavoriteBorderOutlinedIcon/>
                      </button>

                      <button className='bg-[#DB6885] text-white rounded-full w-14 h-9 cursor-pointer'>
                        <ShoppingCartOutlinedIcon/>
                      </button>                      
                    </div>
                  </div>      
                )})

}
        </div> 
      </section>

      {/* See all Menu */}
      <div className='flex justify-center items-center '>
        <LearnMore text="See All Menu"/>
      </div>
    
    </section>
  )
}

export default AboutUsSection