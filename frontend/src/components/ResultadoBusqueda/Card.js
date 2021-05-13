import React from 'react'
import imagen from '../../images/pera.jpg'

function Card({title,imagenSource,url,click}) {
    return (
        <div className="card align-items-center" width= "18rem" onClick={click}>
            <img src={imagen} classname="card-img-top" alt="" width="100" height="100" />
            <div className="card-body">
               <h7 className="card-title"><strong>{title}</strong></h7>
            </div>
        </div>
    )
}

export default Card
