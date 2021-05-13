import React from 'react';
import { useHistory } from "react-router-dom";
import Card from './Card'
import imagen from '../../images/logo.png'

const cards = [
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Carambola",
        image: imagen
    },
    {
        id: 1,
        title: "Plátano",
        image: imagen
    },
    {
        id: 1,
        title: "Limón",
        image: imagen
    },
    {
        id: 1,
        title: "Mandarina",
        image: imagen
    },
    {
        id: 1,
        title: "Naranja",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    }, {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    }, {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    }, {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    }, {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    }, {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    }, {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    },
    {
        id: 1,
        title: "Manzana Verde",
        image: imagen
    }

]

function Cards() {

    let history = useHistory();

    const redirect = (food) => {

        let dato = {
            categoria: "Frutas",
            nombre: "Papaya",
            segundonombre: "Papio",
            procedencia: "Latinoamerica",
            calorias: "56",
            horainicio: "13:00",
            horafinal: "20:00",
            advertencia: "y El consumo excesivo de papayas puede causar un efecto laxante poderoso en los intestinos provocar irritación gastrointestinal, hinchazón dolores y diarrea. Evita comer grandes cantidades de papaya, especialmente si está inmadura.",
            combinacion: "Papaya con limon",
            imagen: "imagen.campo",
            descripcion: "La papaya es una fruta tropical que se consume por su pulpa principalmente, que suele ser de color anaranjado y de sabor dulce y jugoso. ... La papaya es un alimento rico en agua y bajo en calorías, que aporta minerales como calcio, fósforo y hierro y vitaminas A y C. Contiene papaína, un enzima que favorece la digestión."
        }

        history.push({
            pathname: '/ui/mostrar',
            state: { dato }
        });
    }
    return (
        <div className="container justify-content-center align-items-center">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="contenedor" key={card.id} >
                            <Card title={card.title} imageSource={card.image} click={() => redirect(card)}/>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Cards
