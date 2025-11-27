import React from 'react'

const LearnMore = ({

    text = "Learn More",
    color = "#DB6885",
    bg = "transparent",
    width = "9rem" ,
    height = "3.25rem"
    
}) => {

  return (
        <button 
            className='rounded-full outline cursor-pointer'
            style={{width:width , height:height, backgroundColor:bg, color:color}}
            >
            {text}
        </button>
  )
}

export default LearnMore