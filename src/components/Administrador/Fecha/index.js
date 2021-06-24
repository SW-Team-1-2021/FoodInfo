import React from 'react';
import { Input, Label, GrupoInput, LeyendaError } from '../../AñadirAlimento/estilosFormmulario';

const Fecha = ({ className, requerido, estado, cambiarEstado,  label,
	 placeholder, name, leyendaError, onKeyDown,  }) => {

	const onChange = (e) => {
        cambiarEstado({ campo: e.target.value, valido: true });
	}

	function fechaActual(){
	  let fecha=new Date();
	  let hoy=fecha.getDate();
	  let mesActual=fecha.getMonth()+1;
	  let anioActual=fecha.getFullYear();
	  if(hoy<10){
         hoy.toString();
		 hoy=`0${hoy}`;
	   }
	  if(mesActual<10){
		mesActual.toString();
		 mesActual=`0${mesActual}`;
	   }
	const actual=`${anioActual}-${mesActual}-${hoy}`;
	return actual;
  }
   
	//  console.log(hoy);
	//  console.log(mesActual);
	//  console.log(anioActual);
    //  console.log(actual);
	console.log(fechaActual())
	return (
		<div>
			{label && <Label htmlFor={name} valido={estado.valido}>{label}</Label>}
			<GrupoInput>
				<Input
					className={className}
					type="date"
					min="1800-01-01" 
					max={fechaActual()}
					placeholder={placeholder}
					id={name}
					value={estado.campo}
					onChange={onChange}
					valido={estado.valido}
					required={requerido}
					onKeyDown={onKeyDown}
				/>

			</GrupoInput>
			<LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
		</div>
	);
}

export default Fecha;