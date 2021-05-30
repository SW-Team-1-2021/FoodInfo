import React from 'react';
import { Label, Select } from '../estilos';

const Genero = ({ estado, cambiarEstado }) => {

  const onChange = (e) => {
    cambiarEstado({ campo: e.target.value, valido: true })

  }

//  console.log(estado.campo);
  // console.log(estado.valido);
  return (

    <div>
      <Label valido={estado.valido} >*Genero</Label>

      <Select name="categorias" id="categoria"
        //required
        value={estado.campo}
        onChange={onChange}
        valido={estado.valido}
      >

        <option value="">- Seleccione un genero</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </Select>
    </div>
  );


}
export default Genero;
