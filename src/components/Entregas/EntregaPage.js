import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router";
import firebase from '../../instances/firebase'
import './EntregaPage.css'

export default function EntregaPage(props){
  const history = useHistory();
  const [actividades, setActividades] = useState([])


  const getEntregas = () => {
    firebase.database().ref('activities').once('value').then((snapshot)=>{
      let activ = []
      snapshot.forEach(child=>{
        activ.push({id:child.key, ...child.val()});
      })
      setActividades(activ)

    })
  }

  useEffect(() => {
    getEntregas();
  }, [])

  const handleClick = (id)=>{
    console.log(id)
    history.push(`/entregas/${id}`)
  }

  const renderEntregas = () => {
    return actividades.map(actividad=>(
      
        <button className="actividad" onClick={()=>handleClick(actividad.id)}>
          <span className="actividad--titulo">{actividad.titulo}</span><br/>
          <span className="actividad--cuerpo">{actividad.descripcion}</span><br/>
        </button>
        
      
    ))
  }

  return (
    <div className='container'>
      <h1>Actividades</h1>
      <div className='row'>
        <div className="col-sm-6">
          {renderEntregas()}
        </div>
        <div className="actividad--imagen col-sm-6" id="cientifico-hombre">
        </div>
      </div>
    </div>
  )




}