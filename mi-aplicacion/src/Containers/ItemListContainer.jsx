import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../Components/ItemList';
import Imagen from '../Components/Imagen-Ejemplo.png';


const itemList = [

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
    nombre: "PS4 Pro",
    descripcion: "Consola de videojuegos PS4 PRO",
    costo: 400,
  },
  {
    id: 2,
    img: {Imagen},
    nombre: "PS4 Slim",
    descripcion: "Consola de videojuegos PS4 Slim",
    costo: 350,
  },
  {
    id: 3,
    img: {Imagen},
    nombre: "Dualshock 5",
    descripcion: "Control de videojuegos PS5",
    costo: 50
  },
  {
    id: 4,
    img: {Imagen},
    nombre: "Dualshock 4",
    descripcion: "Control de videojuegos PS4",
    costo: 40,
  },
  {
    id: 5,
    img: {Imagen},
    nombre: "PS VR",
    descripcion: "Lentes de videojuegos PS4/PS5",
    costo: 350,
  },
  {
    id: 6,
    img: {Imagen},
    nombre: "Resident Evil 2",
    descripcion: "Videojuego de PS4/PS5",
    costo: 25,
  },
  {
    id: 7,
    img: {Imagen},
    nombre: "Crash Bandicoot Trilogy",
    descripcion: "Videojuego de PS4/PS5",
    costo: 35,
  },
  {
    id: 8,
    img: {Imagen},
    nombre: "The Last of Us 2",
    descripcion: "Videojuego de PS4/PS5",
    costo: 45,
  }
];

const ItemListContainer = () => {

  const [item, setItem] = useState([])

  useEffect( () => { 

    const call = new Promise( (resolve) => {
      
      setTimeout( () => {
  
        resolve(itemList)
  
      }, 2000)

    });
    
    call.then( response => {
      console.log(response)
      setItem(response)
    } );

  }, [])

  return (
      <React.Fragment>
          <ItemList items={item} />
      </React.Fragment>
  );
}

export default ItemListContainer;