import React, { useState } from 'react'
import { Pokelist } from './Pokelist'

export const Pokecart = ({ id, name, img, handleDelete }) => {
    const [style, setStyle] = useState(id)


    return (
    
       
            <div className={`${style % 2 == 0 ? 'millard' : 'red'}`}>
                <p>{id}</p>
                <h2>{name}</h2>
                <img src={img} alt="" />
                <button onClick={() => { handleDelete(name) }}>DELETE</button>
            </div>
       
    )
}
