import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import axios from 'axios';


class Comunicados1 extends Component {
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
  const I = {
      imagen:{
          width:"100%",
          height: "100%",
      },
  };
  return (
    <div id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div>
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                loop={true}
                                pagination={{ clickable: true }}
                                autoplay={{ delay:4000 }}
                                onSlideChange={() => console.log("slide change")}
                                onSwipper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide className="carrusel">
                                    {this.state.comunicados.map(comunicado => 
                                        <h3>{comunicado.title}</h3>
                                    )
                                    }
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="line-division"></div>
                    <div className="col-lg-3 register-zone">
                        <img src="https://i.ibb.co/w4BR7fN/logoHS.png" alt="AQUI VA EL LOGO" className="imagen"/>
                        <Link className="btn-solid-lg page-scroll" to="/acerca">Registrate</Link>
                        <Link className="btn-solid-lg page-scroll" to="/acerca">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );}
}
export default Comunicados1
