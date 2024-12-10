import React from 'react'
import { Link } from 'react-router-dom'
import addicon from "../../assets/Product_Cart.svg"
import Product_list_icon from "../../assets/Product_list_icon.svg"

const Sidebar = () => {
  return (
    <section className=' shadow-2xl flex flex-row h-auto w-100% lg:flex-col pt-5 lg:pt-10 pb-10 justify-center lg:justify-start text-xs sm:text-sm md:text-lg   lg:gap-5 lg:min-w-[250px] lg:h-[100vh] bg-white' >
        <Link to={'/addproduct'}>
            <div className='flex justify-center items-center gap-2 lg:gap-3 bg-[#f6f6f6] rounded-lg p-3 mx-5'>
                <img className='w-4 sm:w-5 md:w-8' src={addicon} alt="" />
                <p>Add Products</p>
            </div>
        </Link>
        <Link to={'/listproduct'}>
            <div className='flex justify-center items-center gap-3 bg-[#f6f6f6] rounded-lg p-3 mx-5'>
                <img className='w-4 sm:w-5 md:w-8' src={Product_list_icon} alt="" />
                <p>Product Lists</p>
            </div>
        </Link>
    </section>
  )
}

export default Sidebar