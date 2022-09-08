import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ tastes }) => {
    const [items, setItems] = useState(0)
    const sumar = () => items <= tastes - 1 ? setItems(items + 1) : alert` no pueden ser mas de 4 gustos en tu kilo de helado`
    const restar = () => items > 0 ? setItems(items - 1) : alert`por favor introduce la cantidad de gustos en tu kilo de helado, muchas gracias!`
    return (
        <>
            <div className='counterContainer'>
                <p>tenes {tastes} hasta gustos para elegir</p>
                <p>tenes {items} gustos en tu kilo de helado</p>
            </div>
            <button className='btn counterBtn' onClick={restar}>-</button>
            <button className='btn counterBtn' onClick={sumar}>+</button>
        </>
    )
}
export default ItemCount