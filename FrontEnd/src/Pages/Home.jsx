import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Department from '../components/Department'
import Message from '../components/Message'

const Home = () => {
  return (
    <>
      <Hero title={"Welcome to family Health care" } imageUrl={"/src/AllImages/hero.png"}/>
      <Biography imageUrl={"/src/AllImages/about.png"}/>
      <Department/>
      <Message/>
    </>
  )
}
export default Home
