import ProductsContainer from "../components/ProductsContainer";
import Card from '../components/Card';
import Button from '../components/Button';

import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";


const Home = () => {
  let nombre = 'usuario';
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
      const resp = await fetch('http://127.0.0.1:3000/api/post/');
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
  }, [ ] );
  


  let titulo = <h2> Esto es un título</h2>;



  return (
    <>
      <h2> Inicio </h2>
      {titulo}

      <h4> ir al login</h4>



      <hr />
    
      <h4>
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

    </>
  );
};

export default Home;
