import React from 'react'
import './Item.css'

const Item = ({ data }) => {
    return (
        <>
            <div id={`ice${data.id}`} className="card card_size d-flex">
                <img src={`${data.img}`} className="card-img-top" alt={data.alt}/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{data.taste}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <input type="checkbox"></input>
                    </div>
            </div>

        </>
    )
}

export default Item