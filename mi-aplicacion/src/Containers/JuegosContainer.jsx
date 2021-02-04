import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import Imagen from '../Components/Imagen-Ejemplo.png';
import Juegos from '../Components/Juegos'

const itemList = [

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





const JuegosContainer = () => {
 
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
        {/* <p style={{color: "black"}}>HOLA SOY JUEGOS CONTAINERS</p> */}
        <section>
            <div className="CentradoArticulos">
                <div className="ItemListMain">
                    {item && item.map( item =>  <Juegos key={item.id} item={item}/>)}
                </div>
            </div>
        </section>
    </React.Fragment>
  );
}

export default JuegosContainer;