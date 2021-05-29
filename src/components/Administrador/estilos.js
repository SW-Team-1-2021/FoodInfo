import styled from 'styled-components';

const Formulario=styled.form`
    display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 65px;

	@media (max-width: 800px){
		grid-template-columns: 1fr;
    
	}
`
const ContenedorBotonCentrado=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 3;
  padding-top: 60px;

  @media (max-width: 800px){
    grid-column: span 1;
  }
`
export{Formulario,ContenedorBotonCentrado};