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
      <div>
        <Boton className="imagen borde" img={img_frutas} alt="Frutas"/>
        <Boton className="imagen borde" img={img_verduras} alt="Verduras"/>
        <Boton className="imagen borde" img={img_carnes} alt="Carnes"/>
      </div>
      <div>
        <Boton className="imagen borde" img={img_cereales} alt="Cereales"/>
        <Boton className="imagen borde" img={img_secos} alt="Frutos Secos"/>
        <Boton className="imagen borde" img={img_legumbres} alt="Legumbres"/>
      </div>
    </div>
  )
}
