import React from 'react'
import myPicture from '../assets/images/me.png';

export default function Header() {
  return (
    <header id="header">
      <div className="inner">
        <a href="#" className="image avatar">
          <img src={myPicture} alt="" />
        </a>
        <h1><strong>I am Wuletaw</strong>, a Full-Stack Engineer <br />
        with a love for Javascript, React, Ruby, <a href='#'>Ruby On Rails</a>, Node and Codeigniter.<br />
        </h1>
      </div>
    </header>
  )
}
