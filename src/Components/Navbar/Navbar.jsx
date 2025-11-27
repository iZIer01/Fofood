import React from 'react'

// Images
import logo from '../../assets/Images/logo.png'

// Icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    
  return (
    <nav className='flex justify-between px-3 py-6'>
        {/*left Section --Logo  */}
        <div>
            <img src={logo}/>
        </div>

        {/* Right Section --Cart&Menu*/}
        <section className='flex justify-between gap-2 max-w-26 '>
            <button className='cursor-pointer border p-1'>
                <ShoppingCartOutlinedIcon/>
            </button>
            
            <button className='cursor-pointer border p-1'>
                <MenuIcon/>
            </button>
        </section>

    </nav>
  )
}

export default Navbar