import React from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import Information from 'parts/HomePage/InformationBox'
import Products from 'parts/HomePage/Products'
import Advertise from 'parts/HomePage/Advertise'
import Footer from 'parts/Footer'

export default function HomePage(props) {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Information></Information>
      <Products></Products>
      <Advertise></Advertise>
      <Footer></Footer>
    </>
  )
}
