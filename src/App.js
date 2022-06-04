import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [ numClics, actNumClics] = useState(0);

  const clic = () =>{
    actNumClics(numClics+1);
  }

  const reiniciarContador = () =>{
    actNumClics(0)
  }
  return (
    <div className='App'>
      <div className='contenedor-titulo'>
        <h1>Contador de Clics</h1>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton 
        texto='Clic'
        botonClic={true}
        manejarClic={clic}/>
        <Boton
        texto='Reiniciar'
        botonClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
