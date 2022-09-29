import React from 'react'
import { Link } from 'gatsby'
import './header.scss'

export default function Header() {
  return (
    <header>
      <h1>wuletaw</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
