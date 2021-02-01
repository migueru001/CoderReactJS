import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../Components/ItemList';
import Imagen from '../Components/Imagen-Ejemplo.png'

const items = [

  {
    id: 0,
    img: {Imagen},
    nombre: "PS5",
    descripcion: "Consola de videojuegos PS5",
    costo: 700
  },
  { 
    id: 1,
    img: {Imagen},
    nombre: "Dualshock 5",
    descripcion: "Control de videojuegos PS5",
    costo: 50
  },
  {
    id: 2,
    img: {Imagen},
    nombre: "PS VR",
    descripcion: "Lentes de videojuegos PS4/PS5",
    costo: 350,
  },
  {
    id: 3,
    img: {Imagen},
    nombre: "PS4 Pro",
    descripcion: "Consola de videojuegos PS4 PRO",
    costo: 400,
  },
  {
    id: 4,
    img: {Imagen},
    nombre: "PS4 Slim",
    descripcion: "Consola de videojuegos PS4 Slim",
    costo: 350,
  },
  {
    id: 5,
    img: {Imagen},
    nombre: "Dualshock 4",
    descripcion: "Control de videojuegos PS4",
    costo: 40,
  }


];

function ItemListContainer(props) {

  const [products, setProducts] = useState([])

  useEffect( () => { 

    const promise = new Promise( (resolve) => {
      
      setTimeout( () => {

        resolve(items)

      }, 2000)
    });

    promise.then( response => {
      setProducts(response)
    } );

  }, [])

  useEffect( () =>{
    console.log(products)
  },[products])

  return (
    <React.Fragment>

    <ItemList items={products} />

    </React.Fragment>

  );
}

export default ItemListContainer;