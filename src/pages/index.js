import React from "react"
import Footer from "../components/Footer"
import GetInTouch from "../components/GetInTouch"
import Header from "../components/Header"
import Hero from "../components/Hero"
import RecentWorks from "../components/RecentWorks"
import { Helmet } from "react-helmet"
import './index.scss'

export default function Home() {
  return <>
    <Helmet>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
      <script src="js/jquery.min.js" defer></script>
			<script src="js/jquery.poptrox.min.js" defer></script>
			<script src="js/browser.min.js" defer></script>
			<script src="js/breakpoints.min.js" defer></script>
			<script src="js/util.js" defer></script>
			<script src="js/main.js" defer></script>
    </Helmet>
    <Header />
    <div id="main">
      <Hero />
      <RecentWorks /> 
      <GetInTouch />
    </div>
    <Footer />
  </>
}
