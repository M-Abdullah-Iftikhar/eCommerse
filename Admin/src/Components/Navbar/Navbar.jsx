import React from 'react'
import logoChar from "../../assets/mtChars.png";
import logoLady from "../../assets/mtLady.png";
import navlogo from "../../assets/nav-logo.svg"
import navprofile from '../../assets/nav-profile.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-white p-2 px-5 sm:px-12 md:px-16'>
        <div className='flex justify-between items-center'>
            <Link to={'/'}><img className='w-[120px] sm:w-[200px]'  src={logoChar} alt="" /></Link>
            <img className='w-[40px] sm:w-[70px]' src={navprofile} alt="" />
        </div>
    </nav>
  )
}

export default Navbar