import React, {Component} from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './Card.js'
import axios from 'axios'
import './Comunicados.css'


class Comunicados extends Component {
  constructor(props) {
    super(props);
    this.state={
      comunicados:[]
    }
  }


  componentDidMount(){
    axios.get('https://api.npoint.io/0748cf8cacb96573ac0a')
        .then(res => {
          this.setState({comunicados:res.data})
          console.log(this.state.comunicados)
        })
        .catch((error) => {
                console.log(error)
        })
  }
  render(){
    return (
      <div className="imagen">
      <div className="container1">
        <h1>Comunicados</h1>
        <p>Los comunicados para el mes de Septiembre son los siguientes:</p>
      </div>
      <div>

      </div>
      <div className="Comunicados">
        <Carousel>
          {
          this.state.comunicados.map(comunicado =>
            <Card title={comunicado.title} description={comunicado.description} />
          )}
        </Carousel>
  
      </div>
      </div>
    );

  }
}
export default Comunicados;