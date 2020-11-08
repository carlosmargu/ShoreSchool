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
    //console.log('hoal')
  }

  const renderEntregas = () => {
    return actividades.map(actividad=>(
      <div className="actividad" onClick={()=>handleClick(actividad.id)}>
        <span className="actividad--titulo">{actividad.titulo}</span><br/>
        <span className="actividad--cuerpo">{actividad.descripcion}</span><br/>
      </div>
    ))
  }

  return (
    <div className='actividad--container'>
      {renderEntregas()}
      <div></div>
    </div>
  )




}