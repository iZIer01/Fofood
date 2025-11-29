import React from 'react'

// Images 
import footerLogo from "../../assets/Images/footerLogo.png"

// Icons
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';



const Footer = () => {
  
  // ComponyInfo
    const busInfo =[
    {
      icon:<EmailOutlinedIcon/>,
      label:"Email us",
      text: "example@gmail.com"     
    },{
      icon: <CallOutlinedIcon/>,
      label: "Call",
      text: "081 45678910" 
    },{
      icon:<AccessTimeOutlinedIcon/>,
      label:"Working Hours",
      text: "Monday - Friday, 08 am - 05 pm"     
    }
  ]

// Quick Link 
const quickLink = [
  {
    header: "Quick Links 1",
    links: ["Home", "My Favorite", "About", "My Cart"]
  },
  {
    header: "Quick Links 2",
    links: ["Menu", "Empty State", "Blog", "Contact Us"]
  }
];


  return (
    <section className='bg-[#db6885] px-5 pb-10 mt-10'>

        {/* News Letter */}
        <div className='text-white flex flex-col items-center py-9 gap-8 font-[Figtree]'>
          <h1 className='text-3xl font-bold '>Newsletter Subscribe</h1>
          
          <input
            type='text'
            placeholder='Email Address'
            className='outline-1 rounded-full placeholder-white font-bold text-[18px] w-full h-15 px-10'
          />

          <input
            type='submit'
            className='bg-white text-[#DB6885] text-[17px] font-semibold rounded-full w-44 h-15'
            value='Subscribe Now'
          />
        </div>

        <hr className='text-[#ffffff5e]'/>

        <img 
            src={footerLogo}
            className='object-contain w-30 h-30'
        />

        {/* Sites Description */}
        <div>
          {
            busInfo.map((item,index)=>{
              return(
                <span key={index} className='flex py-2 text-white'>
                  <span>{item.icon} {item.label}: {item.text} </span>
                </span>
              )
            })      
          }
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-6 text-white my-8 text-lg">
          {quickLink.map((section, index) => (
            <div key={index}>
              
              {/* Header */}
              <h3 className="font-bold text-xl mb-3">{section.header}</h3>

              {/* Links under each header */}
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i} className="cursor-pointer hover:underline">
                    {link}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
        
        <hr className='my-5 text-[#ffffff5e]'/>
        
        {/*  Footer Text*/}
        <footer className='text-white text-[18px] self-center'>Copyright <span className='font-bold'>Banana Studio</span> 2022 All Right Reserved</footer>
    </section>
  )
}

export default Footer