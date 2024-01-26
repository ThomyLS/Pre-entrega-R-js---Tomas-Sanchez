import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id,nombre,precio,img}) => {
  return (
    <div className='detailItem'>
        <img src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <p> ID: {id} </p>
        <p> Precio: {precio} </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quidem nemo necessitatibus harum itaque aperiam cumque, quaerat excepturi maxime, iusto est officia. Numquam ducimus repellat aliquam eveniet minima repudiandae nemo?</p>
        <button> Solicitar </button>
    </div>
  )
}

export default ItemDetail