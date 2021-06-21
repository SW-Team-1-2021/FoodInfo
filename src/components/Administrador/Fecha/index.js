import React from 'react';
import { Input, Label, GrupoInput, LeyendaError } from '../../AñadirAlimento/estilosFormmulario';

const Fecha = ({ className, requerido, estado, nuMin, nuMax, cambiarEstado,  label,
	 placeholder, name, leyendaError, onKeyDown,  }) => {

	const onChange = (e) => {
        cambiarEstado({ campo: e.target.value, valido: true });
	}

	
	// console.log(estado.campo);
	 //console.log(estado.valido);
	return (
		<div>
			{label && <Label htmlFor={name} valido={estado.valido}>{label}</Label>}
			<GrupoInput>
				<Input
					className={className}
					type="date"
					minLength={nuMin}
					maxLength={nuMax}
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