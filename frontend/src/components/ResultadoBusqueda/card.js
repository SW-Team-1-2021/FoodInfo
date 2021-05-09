import React from 'react';
import imagen from '../images/fondo.png'

function Card(){
    return(
        <div className="card text-center">
            <img src={imagen} alt="" />
            <div className="card-body">
                <h4 className="card-title">Mi titulo</h4>
                <p className="card-text">
                    ajsgdjahsg kajhgsdkjahsgkdagsdkjag kajhgsdkjahsgkdagsdkjagjasgd
                    ahsgdjagsdjka kashgdkjahgd kajshgdjakhsgdkja kasgdkjahgd kashgdkjahgd
                </p>
                <a href="" className="btn btn-outline-secondary rounded-0">
                    Ir a la pagina
                </a>
            </div>
        </div>
    )
}
export default Card