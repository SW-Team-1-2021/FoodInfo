import "./style.css"

export const Boton = (props) => {
  return (
    <div onClick={()=>{console.log("click click!")}} className="boton">
      <div className={props.className}>
        <img className="imgCat" src={props.img} alt={props.alt}/>
      </div>
      <div className="label">{props.alt}</div>
    </div>
  );
}
