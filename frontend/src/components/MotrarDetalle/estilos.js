import styled from 'styled-components';

const CajaMayor = styled.div`
    width: 98%;
    max-width: 1000px;
    margin: 20px auto;
    display: grid;
	  grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
	  grid-gap: 20px;

`
const Titulo = styled.div`
  height:60px;
  grid-column-start:1;
  grid-column-end:4;
  h1{
    text-transform: uppercase;
  }

`

const Imagen = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  h4{
    text-transform: uppercase;
  }
  
  
`
const Detalle = styled.div`
   grid-column: span 2;

`
const Parrafos = styled.p`
  padding: 0 10px 0 10px;
   font-zise: 16px;
   font-weight: bold;
`
const Otros = styled.div`
   display:grid;
   grid-template-columns: 1fr 1fr;
   
  
`

const Subtitulos = styled.div`
  font-zise: 16px;
  font-weight: 700;
  
`
const Subtitleespecial = styled.p`
    line-height: 11;
    font-weight: 700;
    font-zise: 16px;
`
export { CajaMayor, Titulo, Imagen, Detalle, Parrafos, Subtitulos, Subtitleespecial,Otros };