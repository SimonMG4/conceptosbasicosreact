import React from 'react';
import ReactDOM from 'react-dom/client';

function Contenedor(props) {
  const estilo = {
    border: '5px solid black',
  };

  return <div style={estilo}>{props.children}</div>;
}

function Saludo(props) {
  let saludo;
  switch (props.idioma) {
    case 'es':
      saludo = 'Hola, ¿Cómo te encuentras';
      break;
    case 'en':
      saludo = 'Hello, How are you';
      break;
    case 'fr':
      saludo = 'Bonjour, Comment ça va';
      break;
    default:
      saludo = 'Hola, ¿Cómo te encuentras';
  }

  return <Contenedor><h1>{saludo}, {props.name} {props.lastName}!</h1></Contenedor>;
}

export default Saludo;