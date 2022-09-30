import React from 'react';
import uno from '../img/1.jpg';
import dos from '../img/2.jpeg';
import tres from '../img/3.jpeg';

const Home = () => {
   return (
      <div>
         <div className="row container p-4">
            <div className="col-md-8">
               <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <img src={uno} alt="" className="tamaño__imagen" />
                     </div>
                     <div className="carousel-item" >
                        <img src={dos} alt="" className="tamaño__imagen" />
                     </div>
                     <div className="carousel-item">
                        <img src={tres} alt="" className="tamaño__imagen" />
                     </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="visually-hidden">Next</span>
                  </button>
               </div>
            </div>

            <div>
               <div className="col-md-4">
                  <div className="mt-5 ms-5">
                     <h1>hola</h1>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
};

export default Home; 