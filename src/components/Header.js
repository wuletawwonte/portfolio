import React from 'react'
import myPicture from '../assets/images/me.png';

export default function Header() {
  return (
    <header id="header">
      <div className="inner">
        <a href="#" className="image avatar">
          <img src={myPicture} alt="" />
        </a>
        <h1><strong>I am Wuletaw</strong>, a Full-stack web developer<br />
        responsive site template freebie<br />
        crafted by <a href="http://html5up.net">HTML5 UP</a>.</h1>
      </div>
    </header>
  )
}
