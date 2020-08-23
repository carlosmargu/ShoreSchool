import React from 'react';



function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-1 col-md m-1">
                <h1>Carlos Andres Martinez <a href="http://www.google.com" class="material-icons floating-btn">attach_file</a></h1>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-1 col-md m-1">
                <h1>Federico Reina <a href="http://www.google.com" class="material-icons floating-btn">attach_file</a></h1>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-1 col-md m-1">
                <h1>Oscar Vargas <a href="http://www.google.com" class="material-icons floating-btn">attach_file</a></h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
