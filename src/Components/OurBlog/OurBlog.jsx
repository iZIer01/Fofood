import React from 'react'
import { Link } from '@mui/material'

// Images
import Cupcakes from "../../assets/Images/OurBlog/article-1.jpeg"
import Donut  from "../../assets/Images/OurBlog/article-2.jpeg"
import Macrons  from "../../assets/Images/OurBlog/article-3.jpeg"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';



const OurBlog = () => {
    
    // Latest POst Card Images 
    const cardDetails = [
        {
            name:"Cupcakes",
            img:Cupcakes,
            title:"How To Cook The Sweet Cupcakes with Strawberry Honey",
            link:"",
        },
        {
            name:"Donut",
            img:Donut,
            title:" Donut topping recommendations for donut lovers",
            link:"",
        },
        {
            name:"Macrons",
            img:Macrons,
            title:"How To Cook The Sweet Macrons with Strawberry Cream",
            link:"",
        }                
    ]

    return (
        <section className='px-5 flex flex-col items-center gap-5 '>
            <h3 className='text-2xl text-[#DB6885] font-[Fredoka] font-semibold'>Our Blog</h3>

            {/* Latest Post */}
            <h2 className='text-3xl font-[Figtree] font-bold '>Latest Post</h2>
            {
                cardDetails.map((item, index)=>{
                    return(
                        <div key={index} className=''>
                            <img 
                                src={item.img}
                                alt={item.name}
                                className=' w-100 h-66 object-cover rounded-3xl '
                            />
                            
                            <h2 className='py-7 text-2xl font-[Figtree] font-semibold'>{item.title}</h2>
                            
                            <Link
                                to="/some-path"
                                className="flex gap-3 items-center"
                                style={{textDecoration:"none", fontSize:"1.2rem", fontWeight:"500",color:"#DB6885"}}
                            >
                            <span > Read More</span>
                            <DoubleArrowIcon />
                            </Link>
                        </div>                        
                    )
                })
                
            }

        </section>
)
}

export default OurBlog