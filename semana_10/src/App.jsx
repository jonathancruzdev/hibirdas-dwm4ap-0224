import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './Card';

function App() {
  let nombre = "José";
  let edad = 21;
  const cursos = ['HTML', 'JS', 'React'];
  let titulo = <h2> Esto es un título</h2>;
  return (
    <div>
      <h1> Aplicaciones Híbridas</h1>
      <img src="" alt="" /> 
      { titulo}
      <Card texto="Termo" precio={40000} />
      <Card texto="Mate" precio={5000} />

      <p className='verde'> Hola { nombre }</p>
      <p> {  edad + 2  }</p>
      <p> {  cursos[2]  } </p>
    </div>
  )
}

export default App
