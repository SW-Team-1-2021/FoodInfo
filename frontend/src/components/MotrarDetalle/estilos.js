import styled from 'styled-components';

const CajaMayor = styled.div`
    width: 98%;
    max-width: 1000px;
    margin: 20px auto;
    display: grid;
	grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
	gap: 10px;

`
const Titulo = styled.div`
  height:60px;
  grid-column: span 3;
  h1{
    text-transform: uppercase;
  }

`

const Imagen = styled.div`
  grid-column: span 1;
  h4{
    text-transform: uppercase;
  }
  
  
`
const Detalle = styled.div`
   grid-column: span 2;
`
const Parrafos = styled.p`
   
   font-zise: 16px;
`
const Subtitulos = styled.div`
  font-zise: 16px;
  font-weight: 700;
`
const Subtitleespecial = styled.p`
    line-height: 7;
    font-weight: 700;
    font-zise: 16px;
`
export { CajaMayor, Titulo, Imagen, Detalle, Parrafos, Subtitulos, Subtitleespecial };