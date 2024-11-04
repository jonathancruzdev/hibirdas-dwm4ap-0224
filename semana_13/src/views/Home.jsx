import ProductsContainer from "../components/ProductsContainer";
import Card from '../components/Card';
import Button from '../components/Button';

import { useState, useEffect } from 'react';


const Home = () => {
  
  let [ recargar, setRecargar] = useState(false);
  let [ logueado, setLoguedo] = useState(false); // Retornar [ valor, fn ]
  let [ productos, setProductos] = useState( [] );
  const [ categorias, setCategorias ] = useState( []);
  useEffect(  () =>{
    console.log('Se Renerizo el componente.')
    const getCategorias =  async () => {
      const resp = await fetch('https://dummyjson.com/products/category-list');
      const data = await resp.json();
      console.log(data);
      setCategorias( data);
    }


    const getProducts = async () => {
      const resp = await fetch('https://dummyjson.com/products');
      const data = await resp.json();
      const products = data.products.map(  product => {
        return { 
          id: product.id, 
          nombre: product.title, 
          foto: product.thumbnail, 
          precio: product.price
        }
      });
      console.log(products);
      setProductos( products);
    }
  
    getProducts();
    getCategorias();
  }, [ recargar] );
  

  const iniciarRecarga = () => {
    setRecargar( !recargar );
  }

  let mensaje = logueado == true ? "bienvenido" : "inicia sesión";
  let nombre = "José";
/*   const productos = [
    { id: 1, nombre: "Mate", precio: 500 },
    { id: 2, nombre: "Gelletias", precio: 100 },
    { id: 3, nombre: "Zapatilla", precio: 2500 },
  ]; */
  let titulo = <h2> Esto es un título</h2>;
  const login = () => {
    console.log("Se inicio la fn login");
    setLoguedo(true);
  };

  const logout = () => {
    setLoguedo(false);
  };

  return (
    <>
      <h2> Inicio </h2>
      {titulo}
      <h4>{mensaje}</h4>
      <Button color="red" text="Ejemplo" />
      <hr />
      <button onClick={login} type="button">
        {" "}
        Login{" "}
      </button>
      <button onClick={logout} type="button">
        {" "}
        Logout{" "}
      </button>

      <button onClick={ iniciarRecarga }> Recargar</button>
      {
        // Renderizado Condicional
        logueado == true ? (
          <div>
            <h4>
              {" "}
              Bienvenido <p className="verde"> Hola {nombre}</p>
            </h4>
            <select >
              <option value="">Seleccionar</option>
              {
                categorias.map( categoria => {
                <option value={categoria}>{categoria}</option>
                })
              }
              
            </select>
            <ProductsContainer>
              {
                // Renderizado de listas
                productos.map((producto) => (
                  <Card
                    key={producto.id}
                    id={producto.id}
                    texto={producto.nombre}
                    precio={producto.precio}
                    foto={producto.foto}
                  />
                ))
              }
            </ProductsContainer>

            <div className="row"></div>
          </div>
        ) : (
          <h4>
            {" "}
            Inicia Sesión <a href="#">Login</a>{" "}
          </h4>
        )
      }
    </>
  );
};

export default Home;
