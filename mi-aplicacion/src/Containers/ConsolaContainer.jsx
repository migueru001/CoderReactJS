import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import Imagen from '../Components/Imagen-Ejemplo.png';
import Consolas from '../Components/Consolas'

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
  }

];





const ConsolaContainer = () => {

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
        {/* <p style={{color: "black"}}>HOLA CONSOLA CONTAINER</p> */}
        <section>
            <div className="CentradoArticulos">
                <div className="ItemListMain">
                    {item && item.map( item =>  <Consolas key={item.id} item={item}/>)}
                </div>
            </div>
        </section>
    </React.Fragment>
  );
}

export default ConsolaContainer;