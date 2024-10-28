import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Card';


import { useState } from 'react';



function App() {

  let [ logueado, setLoguedo ] =  useState(false); // Retornar [ valor, fn ]

  let mensaje = logueado == true ? 'bienvenido' : 'inicia sesión';
  let nombre = "José";
  const productos = [
    {id: 1, nombre: 'Mate', precio: 500 },
    {id: 2, nombre: 'Gelletias', precio: 100 },
    {id: 3, nombre: 'Zapatilla', precio: 2500 }
  ];
  let titulo = <h2> Esto es un título</h2>;
  const login = () => {
    console.log('Se inicio la fn login')
    setLoguedo( true );
  }

  const logout = () => {
    setLoguedo(false);
  }

  console.log('Se renderizo el Componente');
  return (
    <div>
      <h1> Aplicaciones Híbridas</h1>

      { titulo}
      <h4>{ mensaje }</h4>

      <hr />
      <button onClick={ login }  type='button'> Login </button>
      <button onClick={ logout }  type='button'> Logout </button>

      { // Renderizado Condicional
        logueado == true ? (
          <div> 
            <h4> Bienvenido <p className='verde'> Hola { nombre }</p></h4>
              <div className="row">
                { // Renderizado de listas
                  productos.map( producto => ( 
                    <Card 
                      key={producto.id} 
                      texto={producto.nombre} 
                      precio={producto.precio}
                    /> 
                  ))
                  
                }
              </div>
          </div>
        ) : ( 
          <h4> Inicia Sesión <a href='#'>Login</a> </h4>
        ) 
      }




      

    </div>
  )
}

export default App
