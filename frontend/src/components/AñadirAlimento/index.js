import React, { useState } from 'react';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../AñadirAlimento/estilosFormmulario';

//./elementos/Formularios
import Input from '../AñadirAlimento/CampoInput/index';
import Descrip from '../AñadirAlimento/CampoDescripcion/index';
import Imagen from '../AñadirAlimento/CampoIMagen/index';
import Hora from '../AñadirAlimento/CampoHorario/index';
import Categoria from '../AñadirAlimento/CampoCategoria/index';
import './style.css'

const AñadirAlimento = () => {

	const [categoria, cambiarCategoria] = useState({ campo: '', valido: null });

	const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
	const [opcional, cambiarOpcional] = useState({ campo: '', valido: null });
	const [procedencia, cambiarProcedencia] = useState({ campo: '', valido: null });
	const [calorias, cambiarCalorias] = useState({ campo: '', valido: null });

	const [horaDe,cambiarHoraDe]=useState({ campo: '', valido: null });
	const [horaA,cambiarHoraA]=useState({ campo: '', valido: null });

	const [imagen,cambiarImagen]=useState({ campo: '', valido: null });


	const [advertencias, cambiarAdvertencias] = useState({ campo: '', valido: null });
	const [combinacion, cambiarCombinacion] = useState({ campo: '', valido: null });

	const [descripcion, cambiarDescripcion] = useState({ campo: '', valido: null });

	const [formularioValido, cambiarFormularioValido] = useState(null);

	                                            

	const expresiones = {

		nombre1: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\s_ñ-]{4,80}$/,
		advert: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\s_,_.-]{4,150}$/,
		combin: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\s_,_.-]{4,100}$/,
		descrip: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\s_,_.-]{4,250}$/,
		calor: /^\d{0,4}(\.\d{0,4})?$/,
	}





	const onSubmit = (e) => {
		e.preventDefault();
		

		if (
			nombre.valido === true&&
			//opcional.valido === true &&
			procedencia.valido === true &&
			calorias.valido === true &&
			//advertencias.valido === true &&
			//combinacion.valido === true &&
			descripcion.valido === true


		) {
			cambiarFormularioValido(true);
			//const alimento = {nombre:no.mbre.campo};
			//console.log(imagen.campo);
			//console.log(categoria.campo);
			//console.log(horaDe.campo,horaA.campo);

			var datos = { cat:categoria.campo,
				nom:nombre.campo,
				seg:opcional.campo,
				proc:procedencia.campo,
				cal:calorias.campo,
				horDe:horaDe.campo,
				horA:horaA.campo,
				adv:advertencias.campo,
				com:combinacion.campo,
				ima:imagen.campo,
				des:descripcion.campo

			};
			

			 console.log(datos);

		

			cambiarNombre({ campo: '', valido: null });
			cambiarOpcional({ campo: '', valido: null });
			cambiarProcedencia({ campo: '', valido: null });
			cambiarCalorias({ campo: '', valido: null });
			cambiarAdvertencias({ campo: '', valido: null });
			cambiarCombinacion({ campo: '', valido: null });
			cambiarDescripcion({ campo: '', valido: null });

			
			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

	return (
		<main>
			<h2 align="center" >AGREGAR  ALIMENTO</h2>
			<Formulario action="" onSubmit={onSubmit}>

				<Categoria
				estado={categoria}
				cambiarEstado={cambiarCategoria}
				/>

				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre de Alimento"
					placeholder="ej: Platano"
					name="nombre"
					leyendaError=" El nombre tiene que ser de 4 a 80 caracteres, sin caracteres especiales. "
					expresionRegular={expresiones.nombre1}
					requerido={true}
				/>
				<Input
					estado={opcional}
					cambiarEstado={cambiarOpcional}
					tipo="text"
					label="Nombre opcional"
					placeholder="ej: Banana "
					name="opcional"
					leyendaError=" El nombre opcional tiene que ser de 4 a 80 caracteres, sin caracteres especiales. "
					expresionRegular={expresiones.nombre1}
					requerido={""}
				/>
				<Input
					estado={procedencia}
					cambiarEstado={cambiarProcedencia}
					tipo="text"
					label="Procedencia"
					placeholder="ej : Latinoamerica"
					name="procedencia"
					leyendaError=" La procedencia tiene que ser de 4 a 80 carcteres sin caracteres especiales. "
					expresionRegular={expresiones.nombre1}
					requerido={true}
				/>
				<Input
					estado={calorias}
					cambiarEstado={cambiarCalorias}
					tipo="text"
					label="Calorias"
					placeholder="ej: 15.12"
					name="calorias"
					leyendaError=" ingrese solo numeros(maximo 4 enteros y 4 decimales)"
					expresionRegular={expresiones.calor}
					requerido={true}
				/>

				<Hora
				  estadoDe={horaDe}
				  cambiarEstadoDe={cambiarHoraDe}
				  estadoA={horaA}
				  cambiarEstadoA={cambiarHoraA}
				  
					mensajeError=""
				/>

				<Input
					estado={advertencias}
					cambiarEstado={cambiarAdvertencias}
					tipo="text"
					label="Advertencias"
					placeholder="No recomendable para..."
					name="advertencias"
					leyendaError="Las Advertencias tienen que ser de 4 a 80 caracteres sin caracteres especiales. "
					expresionRegular={expresiones.advert}
					requerido={""}
				/>
				<Input
					estado={combinacion}
					cambiarEstado={cambiarCombinacion}
					tipo="text"
					label="Combinacion "
					placeholder="ej: Platano-leche"
					name="combinacion"
					leyendaError=" La combinacion de alimentos deben ser de 4 a 80 caracteres sin caracteres especiales. "
					expresionRegular={expresiones.combin}
					requerido={""}
				/>

				<Imagen
                     estado={imagen}
					 cambiarEstado={cambiarImagen}
				/>

				<Descrip
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					leyendaError="La descripcion debe ser de 4 a 250 digitos sin caracteres especiales."
					expresionRegular={expresiones.descrip}

				/>






				{formularioValido === false && <MensajeError>
					<p>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
	);


}

export default AñadirAlimento;