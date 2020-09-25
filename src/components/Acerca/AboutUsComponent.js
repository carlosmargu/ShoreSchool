import React, { Component } from 'react';
import './AboutUsComponent.css';

class AboutUs extends Component {
    render() {
        return (
        <div>
          <div id="services" className="cards-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Business Growth Services</h2>
                        <p className="p-heading p-large">We serve small and medium sized companies in all tech related industries with high quality growth services which are presented below</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <img className="card-image" src="https://i.ibb.co/7VZcnv2/services-icon-2.png" alt="alternative"/>
                            <div className="card-body">
                                <h4 className="card-title">Opportunity Scan</h4>
                                <p>Once the market analysis process is completed our staff will search for opportunities that are in reach</p>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-image" src="https://i.ibb.co/BN3LJ84/services-icon-3.png" alt="alternative"/>
                            <div className="card-body">
                                <h4 className="card-title">Action Plan</h4>
                                <p>With all the information in place you will be presented with an action plan that your company needs to follow</p>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-image" src="https://i.ibb.co/Wzc480x/services-icon-1.png" alt="alternative"/>
                            <div className="card-body">
                                <h4 className="card-title">Action Plan</h4>
                                <p>With all the information in place you will be presented with an action plan that your company needs to follow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="basic-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h2>Design And Plan Your Business Growth Steps</h2>
                            <p>Use our staff and our expertise to design and plan your business growth strategy. Evolo team is eager to advise you on the best opportunities that you should look into</p>
                            <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">LIGHTBOX</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="https://i.ibb.co/R6x81T4/details-2-office-team-work.png" alt="alternative"/>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="https://i.ibb.co/34NrZJN/details-1-office-worker.png" alt="alternative"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h2>Search For Optimization Wherever Is Possible</h2>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check"></i>
                                    <div className="media-body">Basically we'll teach you step by step what you need to do</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i>
                                    <div className="media-body">In order to develop your company and reach new heights</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i>
                                    <div className="media-body">Everyone will be pleased from stakeholders to employees</div>
                                </li>
                            </ul>
                            <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">LIGHTBOX</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        );}
}
export default AboutUs;
