import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import ProductDisplayCart from '../Components/ProductDisplayCart/ProductDisplayCart'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Product = () => {

  const {allproduct} = useContext(ShopContext)
  const {productId}  = useParams()
  const product = allproduct.find((e) => e.id === Number(productId))
  return (
    <div>
      {/* hello */}
      <Navbar/>
      <BreadCrums product = {product}/>
      <ProductDisplayCart product = {product}/>
      <DescriptionBox/>
      <Footer/>
    </div>
  )
}

export default Product