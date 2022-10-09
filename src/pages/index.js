import React from "react"
import Footer from "../components/Footer"
import GetInTouch from "../components/GetInTouch"
import Header from "../components/Header"
import Hero from "../components/Hero"
import RecentWorks from "../components/RecentWorks"
import './index.scss'

export default function Home() {
  return <>
    <Header />
    <div id="main">
      <Hero />
      <RecentWorks /> 
      <GetInTouch />
    </div>
    <Footer />
  </>
}
