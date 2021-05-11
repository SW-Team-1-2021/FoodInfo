import React from 'react'
import Card from './Card'
import imagen from '../../images/logo.png'

const cards = [
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen,
        url: "https://www.youtube.com/"
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen,
        url: "https://www.youtube.com/"
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen,
        url: "https://www.youtube.com/"
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen,
        url: "https://www.youtube.com/"
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen,
        url: "https://www.youtube.com/"
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen,
        url: "https://www.youtube.com/"
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen,
        url: "https://www.youtube.com/"
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen,
        url: "https://www.youtube.com/"
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen,
        url: "https://www.youtube.com/"
    }
]

function Cards() {
    return (
        <div className="container justify-content-center align-items-center">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-3" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
