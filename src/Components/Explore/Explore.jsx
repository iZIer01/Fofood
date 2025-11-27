import React from 'react'

// Images 
import item2 from "../../assets/Images/ExploreItem/image (2).png"
import item3 from "../../assets/Images/ExploreItem/image (3).png"
import item4 from "../../assets/Images/ExploreItem/image (4).png"
import item5 from "../../assets/Images/ExploreItem/image (5).png"
import item6 from "../../assets/Images/ExploreItem/image (6).png"
import item8 from "../../assets/Images/ExploreItem/image (8).png"
import man from "../../assets/Images/ExploreItem/man.jpeg"
import girl from "../../assets/Images/ExploreItem/gir.jpeg"


const Explore = () => {

const deliciousMenu = [
    {
        id:1,
        image:item2,
        title:"Cakes",
        caption:"3 Menu"
    },
    {

        id:2,
        image:item3,
        title:"Cupcakes",
        caption:"3 Menu"        
    },
    {

        id:3,
        image:item4,
        title:"Donuts",
        caption:"2 Menu"        
    },
    {

        id:4,
        image:item5,
        title:"Cookies",
        caption:"1 Menu"        
    },
    {

        id:5,
        image:item6,
        title:"Macrons",
        caption:"0 Menu"        
    },
    {

        id:6,
        image:item8,
        title:"Drinks",
        caption:"0 Menu"        
    }    

    
]

  return (
    <section className='flex flex-col items-center justify-center py-20 px-5'>
        <h3 className='text-[#DB6885] text-2xl font-semibold font-[fredoka]'>Explore</h3>
        <h2 className='text-3xl font-semibold mt-4 mb-7'>Our Delicious Menu</h2>
           
           {/* Menu Cards */}
           {
            deliciousMenu.map((items,index) =>{
                return(
                    <div key={index} className='w-86 h-58 border border-[#bebebe] rounded-2xl flex flex-col justify-center items-center my-5 cursor-pointer'>
                        <img 
                        src={items.image}
                        alt='slice of cake'
                        className='w-[40%] object-contain'/>

                        <h3 className='text-2xl font-semibold font-[fredoka]'>{items.title}</h3>
                        <h3 className='text-[20px] text-[#DB6885] font-semibold font-[fredoka]'>{items.caption}</h3>
                            
                    </div>
                )
            })}

            {/* Card Of man and girl */}
            <section className='py-10 grid grid-cols-2 place-items-center gap-6'>
                <img 
                    src={man}
                    alt='chief with cupcake'   
                    className=' w-full rounded-2xl object-contain'
                />
                
                <img 
                    src={girl}
                    alt='girl with cupcake'   
                    className=' w-full rounded-2xl object-contain mt-10'
                />

            </section>

    </section>
  )
}

export default Explore