import React from 'react'
import imagen from '../../images/logo.png'

function Card({title,imagenSource,url}) {
    return (
        <div className="card align-items-center">
            <img src={imagen} alt="" width="150" height="150"/>
            <div className="card-body">
               <h6><a href={url} className="card-title">{title} </a></h6>
            </div>
        </div>
    )
}

export default Card
