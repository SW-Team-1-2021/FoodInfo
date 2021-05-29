import styled from 'styled-components';

const Formulario = styled.form`
    display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 65px;

	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`
const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 3;
  padding-top: 60px;

  @media (max-width: 800px){
    grid-column: span 1;
  }
`

const Label = styled.label`
display: block;
font-weight: 700;
padding: 10px;
min-height: 40px;
cursor: pointer;
`;

const Select = styled.select`
grid-template-columns: 1fr ;
width: 100%;
background: #fff;
border-radius: 3px;
height: 40px;
line-height: 45px;
padding: 0 10px 0 10px;
transition: .3s ease all;
border: 3px solid transparent;
&:focus {
outline: none;
box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
}
`;
export { Formulario, ContenedorBotonCentrado, Label, Select };