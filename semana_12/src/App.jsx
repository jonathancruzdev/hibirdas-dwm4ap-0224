import reactLogo from './assets/react.svg'
import './App.css'

// Importo las vistas
import Home from './views/Home';
import Contact from './views/Contact';
import Details from './views/Details';
import Login from './views/Login';
import NotFound from './views/NotFound';

import { Routes, Route, NavLink, Link } from 'react-router-dom';



function App() {



  console.log('Se renderizo el Componente');
  return (
    <div>
      <h1> Aplicaciones Híbridas</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink to='/'> Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/contact'> Contactos </NavLink>
          </li>
          <li>
            <NavLink to='/login'> Login </NavLink>
          </li>
        </ul>
      </nav>
      { /* El área deonde se van a mostrar los componentes (Vistas)  */}
      <Routes>
        <Route path='/' element={ <Home /> } /> 
        <Route path='/contact' element={ <Contact/>} />
        <Route path='/details/:id' element={ <Details/>} />
        <Route path='/login' element={ <Login />} />
        <Route path='*' element={ <NotFound />} />
      </Routes>







      

    </div>
  )
}

export default App
