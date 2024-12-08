import React from 'react'
import Hero from '../components/Hero'
import Biography from "../components/Biography"

const AboutUs = () => {
  return (
    <>
      <Hero title={"Learn More About Us | SainiCare medical institute"} imageUrl={"/src/AllImages/about.png"}/>
      <Biography imageUrl={"/src/AllImages/whoweare.png"}/>
    </>
  )
}

export default AboutUs
