import React, {useState, useEffect} from 'react';
import ItemDetail from '../Components/ItemDetail';

const ItemDetailContainer = () => {

const [getItems, setGetItems] = useState([])

useEffect( () => {

    setTimeout( () => {

        fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA5725")
        .then(response => response.json())
            .then(data => setGetItems(data.results.slice(0, 1)))

    }, 2000)

}, [])  

useEffect( () =>{
    console.log(getItems)
  },[getItems])


return (
    <React.Fragment>
        <ItemDetail getItems={getItems} />
    </React.Fragment>
  );
}

export default ItemDetailContainer;