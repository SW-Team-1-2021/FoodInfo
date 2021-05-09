import React from 'react'
import Card from './Card';
import imagen from '../images/fondo.png'

const cards = [
    {
        id=1,
        title: "Fazt Web1",
        image: imagen
    },
    {
        id=2,
        title: "Fazt Web2",
        image: imagen
    },
    {
        id=3,
        title: "Fazt Web3",
        image: imagen
    },
    {
        id=4,
        title: "Fazt Web4",
        image: imagen
    }
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => {
                        <div className="col-md-3" key={card.id}>
                            <Card />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Cards
