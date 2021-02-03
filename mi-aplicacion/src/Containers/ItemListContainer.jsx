import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import CountContainer from './CountContainer';
import ItemList from '../Components/ItemList';
import ItemDetailContainer from './ItemDetailContainer'

const items = [

  {
    id: 0,
    nombre: "PS5",
    descripcion: "Consola de videojuegos",
    costo: "500"
  },
  { 
    id: 1,
    nombre: "Dualshock 5",
    descripcion: "Control de videojuegos",
    costo: "50"},
  {
    id: 2,
    nombre: "PS VR",
    descripcion: "Lentes de videojuegos",
    costo: "350",
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
    <div className="ItemListContainer">
        <div className="card">
            <h3>Hola, soy {props.nombre}</h3>
            <CountContainer initial={0} stock={10} />
        </div>
    </div>
    <ItemList items={products} />

    <ItemDetailContainer/>

    </React.Fragment>

  );
}

export default ItemListContainer;