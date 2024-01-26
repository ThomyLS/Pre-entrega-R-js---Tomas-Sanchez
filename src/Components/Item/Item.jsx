import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="contenedorItem">
        <img src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <p> ID: {id} </p>
        <p> Precio: {precio} </p>
        <Link to={`/item/${id}`}> Solicitar </Link>
    </div>
  )
}

export default Item