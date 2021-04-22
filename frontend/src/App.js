import React, {useState} from 'react';
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';

import Input from './componentes/Input';
import Descrip from './componentes/CampoDescripcion';
import Imagen from './componentes/CampoImagen'
import Hora from './componentes/Horario';
import Categoria from './componentes/CampoCategoria';

const App = () => {
	const [categoria, cambiarCategoria] = useState({campo: '', valido: null});
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [opcional, cambiarOpcional] = useState({campo: '', valido: null});
	const [procedencia, cambiarProcedencia] = useState({campo: '', valido: null});
	const [calorias, cambiarCalorias] = useState({campo: '', valido: null});
	//const [horario, cambiarHorario] = useState({campo: '', valido: null});

	const [advertencias, cambiarAdvertencias] = useState({campo: '', valido: null});
	const [combinacion, cambiarCombinacion] = useState({campo: '', valido: null});
    
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

	/*const categorias= [{"nombre":"Frutas"},
                       {"nombre":"Verduras"},
					   {"nombre":"Lacteos"},      
					   {"nombre":"Carnes y Pescado"},
					   {"nombre":"Hortalizas"}
					];*/

	const expresiones = {
		
		nombre1 : /^[a-zA-Z0-9_\s_ñ-]{4,80}$/, 
        advert: /^[a-zA-Z0-9_\s_ñ,_-]{4,150}$/, 
       combin:  /^[a-zA-Z0-9_\s_ñ_,-]{4,100}$/, 
       descrip : /^[a-zA-Z0-9_\s_,_ñ-]{4,250}$/,
	   calor : /^[0-9_\s_,_-]{2,8}$/,
	}

	

	

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			categoria.valido === 'true' &&
			nombre.valido === 'true' &&
			opcional.valido === 'true' &&
			procedencia.valido === 'true' &&
			calorias.valido === 'true' &&
		//	horario.valido === 'true' &&
			advertencias.valido==='true'&&
			combinacion.valido==='true' &&
			descripcion.valido==='true' 
			
		){
			cambiarFormularioValido(true);
			cambiarCategoria({campo: '', valido: ''});
			cambiarNombre({campo: '', valido: null});
			cambiarOpcional({campo: '', valido: null});
			cambiarProcedencia({campo: '', valido: 'null'});
			cambiarCalorias({campo: '', valido: null});
		 //	cambiarHorario({campo: '', valido: null});
			cambiarAdvertencias({campo: '', valido: null});
			cambiarCombinacion({campo: '', valido: null});
			cambiarDescripcion({campo: '', valido: null});

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
				/>
				<Input
					estado={calorias}
					cambiarEstado={cambiarCalorias}
					tipo="number"
					label="Calorias"
					placeholder="ej: 24"
					name="calorias"
					leyendaError=" ingrese solo numeros "
					expresionRegular={expresiones.calor}
				/>
			
				<Hora
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
				/>
				<Input
					estado={combinacion}
					cambiarEstado={cambiarCombinacion}
					tipo="text"
					label="Combinacion "
					placeholder="ej: Platano-leche"
					name="combinacion"
					leyendaError=" La combinacion de alimentos deben ser de 4 a 80 caracteres sin caracteres especiales. "
					expresionRegular={expresiones.nombre1}
				/>

				 <Imagen
				 
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
 
export default App;