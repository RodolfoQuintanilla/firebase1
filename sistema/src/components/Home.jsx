import React, { useState } from 'react';
import appfirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appfirebase);


const Home = ({ correoUsuario }) => {
   console.log(correoUsuario);

   const valorInicial = {
      nombre: '',
      edad: '',
      profecion: ''
   }


   const [usuario, setUsuario] = useState(valorInicial);

   const capturarInputs = (e) => {
      const { name, value } = e.target;
      setUsuario({ ...usuario, [name]: value })
   }
   const guardarDatos = async (e) => {
      e.preventDefault();
      console.log(usuario);
      setUsuario(...valorInicial)
   }

   return (
      <div className='container'>
         <p>Bienvenido <strong>{correoUsuario}</strong> Haz Iniciado Secion </p>

         <button className='btn btn-primary' onClick={() => signOut(auth)}>
            Cerra Secion
         </button>
         <hr />

         <div className='row'>
            {/* Esta seccion es del Formulartio */}
            <div className="col-md-4 ">
               <h3 className='text-center mb-3'>Ingresar Usuarios</h3>
               <form onSubmit={guardarDatos}>
                  <div className="card card-body">
                     <div className="from-group">
                        <input type="text"
                           name='nombre' className='form-control mb-3'
                           placeholder='Ingresar El Nombre del Usuario'
                           onChange={capturarInputs}
                           value={usuario.nombre}
                        />
                        <input type="text" name='edad' className='form-control mb-3'
                           placeholder='Ingresar la Edad'
                           onChange={capturarInputs}
                           value={usuario.edad}
                        />

                        <input type="text" name='profecion'
                           className='form-control mb-3'
                           placeholder='Ingresar la Profecion'
                           onChange={capturarInputs}
                           value={usuario.profecion}
                        />

                     </div>
                     <button className='btn btn-primary'>
                        Guardar
                     </button>
                  </div>
               </form>
            </div>
            {/*  Esta seccion lista de usuarios */}
            <div className="col-md-8">
               <h2 className='text-center'>Lista de Usuarios</h2>
            </div>

         </div>
      </div>
   );
};

export default Home; 