import React, { Component } from "react";
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import './Semanas.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
const localizer = momentLocalizer(moment)
require('moment/locale/es.js');
  

//array de eventos
const myEventsList= [{
  title: "Entrega Taller 1",
  start: new Date('2020-11-03 10:22:00'),
  end: new Date('2020-11-03 10:42:00')
},
{
  title: "string",
   start: new Date('2019-05-05 12:22:00'),
  end: new Date('2019-05-05 13:42:00')
}]
class Semanas extends Component {
  render() {
  return (
    <div class="container">
        <div class="row">
            <div  className=" col-sm bigCalendar-container calendario">
                    <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    
                    messages={{
                            next: "sig",
                            previous: "ant",
                            today: "Hoy",
                            month: "Mes",
                            week: "Semana",
                            day: "Día"
                            }}
                    />
            </div>
    </div>
  </div> 
);
  }
}
export default Semanas;