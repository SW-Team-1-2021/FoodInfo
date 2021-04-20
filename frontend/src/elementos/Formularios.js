import styled, {css} from 'styled-components';

const colores = {
    borde:"#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Formulario = styled.form`
     display: grid;
     grid-template-columns: 1fr 1fr 1fr ;
     gap: 20px;


    @media(max-width: 800px){
        grid-template-columns: 1fr 
    }
`;

const Label=styled.label`
     display: block;
     font-weight: 700;
     padding: 10px;
     min-height: 70px;
     cursor: pointer;

     ${props => props.valido === false && css`
       color: ${colores.error};
     `}

     
`;
const GrupoInput=styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr ;
      gad: 20px;
      input {
        width: 100%;
        
     }

     
`;
 const Input=styled.input`
    windth: 100%
    background: #fff;
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    padding: 0 40px 0 10px;
    border: 3px solid transparent;

    &: focus{
        border: 3px solid ${colores.borde};
        outline: none;
        bax-shadow: 3px 0px 30px rgba(163,163,163,8,4);
    }
    ${  props =>props.valido=== true && css`
        border: 3px solid transparent;
     `}

     ${  props =>props.valido=== false && css`
        border: 3px solid ${colores.error} !important;
     `}
 `;

 const BotonMedio=styled.div`
    display flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 3;

 `;

 const Descri=styled.div`  
  grid-column: span 2;
   input {
      width: 100%;
      
   }
 `;

 const Boton=styled.button`
     heigh: 35px;
     width: 30%;
     background: #000;
     color: #fff;
     border-radius: 3px;
 `;

  const MensajeError=styled.p`
         font-size: 12px;
         margin-botton: 0;
         color: ${colores.error};
         display: none;

     ${  props =>props.valido=== true && css`
        display: none;
      `}  

      ${  props =>props.valido=== false && css`
        display: block ;
      `}  
  `;

export  {Formulario, Label,GrupoInput,Input,BotonMedio,Descri,Boton,MensajeError}; 