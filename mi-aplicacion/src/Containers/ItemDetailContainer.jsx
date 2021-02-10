import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import Imagen from '../Components/Imagen-Ejemplo.png';
import ItemDetail from '../Components/ItemDetail';
import {useParams} from 'react-router-dom';

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

const ItemDetailContainer = ( {articulo} ) => {


  const [item, setItem] = useState([])

  const [Articulo, setArticulo] = useState({})

  const {id} = useParams();

  useEffect( () => { 

    const call = new Promise( (resolve) => {
      
      setTimeout( () => {
  
        resolve(itemList, articulo)
  
      }, 2000)

    });
    
    call.then( response => {
      setItem(response[id])
      setArticulo(articulo)
    } );

  }, [id])


  return (
      <React.Fragment>
          <ItemDetail item={item} Articulo={Articulo}/>
      </React.Fragment>
  );
}

export default ItemDetailContainer;
