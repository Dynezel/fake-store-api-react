import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FavImg from '../images/me-gusta.png'
import NoFavImg from '../images/me-gusta-blanco.png'

export default function Producto({producto, agregarFavoritos, eliminarFavoritos}) {

    const[favorito, setFavorito] = useState(false)

    function handleClick() {
        if(favorito) {
            eliminarFavoritos(producto)
            setFavorito(false)
        }
        else {
            agregarFavoritos(producto)
            setFavorito(true)
        }
    }

  return (
    <div className='producto'>
        <Link to={`/producto/${producto.id}`}> <img src={producto.image}></img> </Link> 
        <div className='info'>
            <p> {producto.title} </p>
            <mark>{producto.price}</mark>
        </div>     
        {
            favorito ? 
            <img className='fav-icon' onClick={handleClick} src = {FavImg}></img>
            :
            <img className='fav-icon' onClick={handleClick} src = {NoFavImg}></img>
        }
        
    </div>
  )
}
