import React from 'react'

import LogoImg from "../images/buscasitasGold.png"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className = "header">
      <Link className = "icon" to = {'/'}> <img src = {LogoImg} alt = ""/> </Link>
      <nav>
        <Link to = {"/"}>Productos</Link>
        <Link to = {"/favoritos"}>Favoritos</Link>
        <Link to = {`/`}></Link>
      </nav>
    </header>
  )
}
