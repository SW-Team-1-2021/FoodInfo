import "./style.css";

export const Boton = (props) => {
  return (
    <div onClick={() => props.redirigir(props.alt)} className="boton">
      <div className='borde'>
        <img className="imgCat" src={props.img} alt={props.alt} />
      </div>
      <div className="label">{props.alt}</div>
    </div>
  );
};
