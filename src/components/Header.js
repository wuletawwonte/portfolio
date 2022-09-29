import React from 'react'
import { Link } from 'gatsby'
import './header.scss'

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>wuletaw</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
