import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

const Shop = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Popular/>
    <Offer/>
    <NewCollections/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default Shop