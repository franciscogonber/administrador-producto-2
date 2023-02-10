import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detalle = () => {
    const {id}= useParams();
    const [item, setItem] = useState({});
    useEffect(()=>{
        axios.get("http://localhost:8000/api/productos/"+id) // conectar fron con back ---los nombres de los parametros deben estar iguales a los nombre  en el modelo
            .then(respuesta => {
                setItem(respuesta.data);
                console.log(respuesta);
            })
            .catch(error => {
                console.log(error);
            })
    },[])
  return (
    <div>
      <h1>Detalle de Producto</h1>
      {item && (
        <div>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
        </div>
      )}
    </div>
  )
}

export default Detalle
