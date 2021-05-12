import "./style.css"

export const Boton = (props) => {
  return (
    <span className="contenedor">
      <span className={props.className}>
        <img className="imgCat" src={props.img} alt={props.alt}/>
      </span>
      <div className="label">{props.alt}</div>
    </span>
  );
}
