import React, { Component } from "react";
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import firebase from '../../instances/firebase'
import './Semanas.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
const localizer = momentLocalizer(moment)
require('moment/locale/es.js');
  

 
class Semanas extends Component {

  constructor(props){
    super()
    this.state = {
      tareas: [],
      firebaseInited: false
    }
  }

  componentDidMount(){
    this.getEntregas();
  }

  getEntregas = () => {
    firebase.database().ref('activities').once('value').then((snapshot)=>{
      let activ = []
      snapshot.forEach(child=>{
        activ.push({
          title: child.val().titulo,
          start: new Date(child.val().fecha),
          end: new Date(child.val().fechafin),
        });
      })
      this.setState({tareas: activ})

    })
  }

  render() {
  return (
    <div class="container">
        <div class="row">
            <div  className=" col-sm bigCalendar-container calendario">
                    <Calendar
                    localizer={localizer}
                    events={this.state.tareas}
                    startAccessor="start"
                    endAccessor="end"
                    
                    messages={{
                            next: "sig",
                            previous: "ant",
                            today: "Hoy",
                            month: "Mes"
                            }}
                    views={[
                      'month',
                      'agenda'
                    ]}
                    />
            </div>
    </div>
  </div> 
);
  }
}
export default Semanas;