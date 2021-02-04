import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import Imagen from '../Components/Imagen-Ejemplo.png';
import Accesorios from '../Components/Accesorios'

const itemList = [

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
  }

];





const AccesoriosContainer = () => {

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
        {/* <p style={{color: "black"}}>HOLA CONSOLA ACCESORIOS CONTAINER</p> */}
        <section>
            <div className="CentradoArticulos">
                <div className="ItemListMain">
                    {item && item.map( item =>  <Accesorios key={item.id} item={item}/>)}
                </div>
            </div>
        </section>
    </React.Fragment>
  );
}

export default AccesoriosContainer;