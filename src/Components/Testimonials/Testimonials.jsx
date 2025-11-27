import React from 'react'

// Images
import bgImage from '../../assets/Images/Testimonial/bg-testimonial.jpeg'
import profileImg from '../../assets/Images/Testimonial/image (8).png'
import profileImg2 from '../../assets/Images/Testimonial/image (9).png'

// Icons
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';


const Testimonials = () => {

    // Profile Info
    const profileInfo = [
        {
            img:profileImg,
            title:"It‘s very delicious!",
            starsAmount:5,
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet venenatis a vel id tincidunt volutpat faucibus scelerisque. Morbi eget turpis aliquet nunc, varius aliquam ipsum.",
            caption:"Trojan Fox",
        },
    ]

           

    return (
    <div className='w-full min-h-[480px] pt-9 pb-16 bg-cover flex flex-col items-center ' style={{backgroundImage:`url(${bgImage})`}}>
        <h3 className='text-[#DB6885] text-[20px] font-bold'>Testimonial</h3>
        <h3 className='text-[24px] font-bold py-3 mb-9'>What People Say</h3>
        
        {/* Testimonial Card */}
            {
                profileInfo.map((item,index)=>{
                    return(
                        <div key={index} className=' flex flex-col items-center justify-center  bg-white w-[350px] rounded-2xl py-7 px-7 '>
                            <img 
                                src={item.img}
                                alt="profile image of a man"
                                className=''    
                            />
                            <h4 className='font-bold py-2 '>{item.title}</h4>

                               {/* Adding Stars */}
                            <div>   
                                {Array(item.starsAmount).fill().map((_,index)=>(
                                        <StarOutlinedIcon 
                                            key={index}
                                            sx={{color:"#FFC107"} }
                                        />
                                ))}
                            </div> 
                            
                            <p className='text-center font-light leading-7  py-4'>{item.text}</p>   
                            <h4 className='text-[#DB6885] font-bold'>{item.caption}</h4>
                        </div>
                    )
                })
            }                
    </div>
  )
}

export default Testimonials