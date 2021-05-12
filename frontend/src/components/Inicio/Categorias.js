import { Boton } from "./Boton";
import "./style.css"
import img_frutas from "../../images/categorias/frutas.jpeg"
import img_verduras from "../../images/categorias/verduras.jpeg"
import img_carnes from "../../images/categorias/carnes.jpeg"
import img_cereales from "../../images/categorias/cereales.jpeg"
import img_secos from "../../images/categorias/frutos_secos.jpeg"
import img_legumbres from "../../images/categorias/legumbres.jpeg"

export const Categorias = () => {
  return(
    <div className="catdiv">
        <Boton className="borde" img={img_frutas} alt="Frutas"/>
        <Boton className="borde" img={img_verduras} alt="Verduras"/>
        <Boton className="borde" img={img_carnes} alt="Carnes"/>
        <Boton className="borde" img={img_cereales} alt="Cereales"/>
        <Boton className="borde" img={img_secos} alt="Frutos Secos"/>
        <Boton className="borde" img={img_legumbres} alt="Legumbres"/>
    </div>
  )
}
