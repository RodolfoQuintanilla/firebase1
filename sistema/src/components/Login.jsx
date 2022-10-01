import React, { useState } from 'react';
import uno from '../img/1.jpg';
import dos from '../img/2.jpeg';
import tres from '../img/3.jpeg';

import firebaseApp from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

const Login = ({ usuario }) => {



   const [registro, setRegistro] = useState(false);

   const handleAuth = () => {
      setRegistro(!registro)
   }


   const handleSubmit = async (e) => {
      e.preventDefault()
      const correo = e.target.email.value;
      const contrasena = e.target.contra.value;
      if (registro) {
         await createUserWithEmailAndPassword(auth, correo, contrasena)
      }
      else {
         await signInWithEmailAndPassword(auth, correo, contrasena)
      }
   }

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
                     <h1>{registro ? 'Registrate' : 'Inicia Secion'}</h1>
                     <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                           <label className="form-label">Direccion de Email:</label>
                           <input type="email" className="form-control" placeholder='Ingresar Email' id='email' required />
                        </div>
                        <div className="mb-3">
                           <label className="form-label">Contraseña:</label>
                           <input type="password" className="form-control" placeholder='Ingresar Contraseña' id='contra' required />
                        </div>
                        <button className="btn btn-primary" type="submit">
                           {registro ? 'registrate' : 'Inicia Secion'}
                        </button>
                     </form>
                     <div className='form-group mt-3 mt-4'>
                        <button onClick={handleAuth} className='btn btn-dark'>
                           {registro ? 'Ya tienes Cueneta' : 'No tines cuenta'}
                        </button>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
};

export default Login;