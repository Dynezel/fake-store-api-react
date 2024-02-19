import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Footer from './Componentes/Footer'
import Navbar from './Componentes/Navbar'
import Productos from './Componentes/Productos'
import useProducto from './Hooks/useProducto'
import Detalle from './Componentes/Detalle'

function App() {

  const {productos, favoritos, agregarFavoritos, eliminarFavoritos} = useProducto()

  return (

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path = "/" element = {<Productos productos = {productos} agregarFavoritos={agregarFavoritos} eliminarFavoritos={eliminarFavoritos}/>}/>
        <Route path = "/favoritos" element = {<Productos productos = {favoritos} agregarFavoritos={agregarFavoritos} eliminarFavoritos={eliminarFavoritos}/>}/>
        <Route path = "/producto/:id" element = {<Detalle/>}/>
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  )
}

export default App
