import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../Servicios/productoService';

export default function Detalle() {

  const [producto, setProducto] = useState({})

  const {id} = useParams();

  useEffect(() => {
    obtenerProductoPorId(id).then((data) => {
      setProducto(data);
    });
  }, []);

  return (
    <div className='detalle'>
      <img src= {producto.image} alt=''></img>
      <div>
        <h3>{producto.title}</h3>
        <blockquote> {producto.description} </blockquote>
        <mark> {producto.price} </mark>
      </div>
    </div>
    
  )
}
