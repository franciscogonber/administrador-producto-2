import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Lista = () => {
    const [lista, setLista] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/productos") // conectar fron con back ---los nombres de los parametros deben estar iguales a los nombre  en el modelo
            .then(respuesta => {
                setLista(respuesta.data);
                console.log(respuesta);
            })
            .catch(error => {
                console.log(error);
            })
    },[])// cuando esta vacia [] se ejecuta solo una vez
  return (
    <div>
      <h1>Lista de productos</h1>
      {lista && lista.map((item, index)=>{
        return <p><a href={'/'+item._id}>{item.title}</a></p>
      })}
    </div>
  )
}

export default Lista
