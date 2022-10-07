import React, { useEffect, useState } from 'react'
import appfirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
} from 'firebase/firestore'

const auth = getAuth(appfirebase)
const db = getFirestore(appfirebase)

const Home = ({ correoUsuario }) => {
  console.log(correoUsuario)

  const valorInicial = {
    nombre: '',
    edad: '',
    profecion: '',
  }

  const [usuario, setUsuario] = useState(valorInicial)
  const [lista, setLista] = useState([])

  const capturarInputs = (e) => {
    const { name, value } = e.target
    setUsuario({ ...usuario, [name]: value })
  }

  const guardarDatos = async (e) => {
    e.preventDefault()
    /* console.log(usuario); */
    try {
      await addDoc(collection(db, 'usuarios'), {
        ...usuario,
      })
    } catch (error) {
      console.log(error)
    }
    setUsuario({ ...valorInicial })
  }

  useEffect(() => {
    const getlista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'usuarios'))
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id })
        })
        setLista(docs)
      } catch (error) {
        console.log(error)
      }
    }
    getlista()
  }, [lista])

  return (
    <div className="container">
      <p>
        Bienvenido <strong>{correoUsuario}</strong> Haz Iniciado Secion{' '}
      </p>

      <button
        className="btn btn-primary botonMio"
        onClick={() => signOut(auth)}
      >
        Cerra Secion
      </button>
      <hr />

      <div className="row">
        {/* Esta seccion es del Formulartio */}
        <div className="col-md-4 ">
          <h3 className="text-center mb-3">Ingresar Usuarios</h3>
          <form onSubmit={guardarDatos}>
            <div className="card card-body">
              <div className="from-group">
                <input
                  type="text"
                  name="nombre"
                  className="form-control mb-3"
                  placeholder="Ingresar El Nombre del Usuario"
                  onChange={capturarInputs}
                  value={usuario.nombre}
                />
                <input
                  type="text"
                  name="edad"
                  className="form-control mb-3"
                  placeholder="Ingresar la Edad"
                  onChange={capturarInputs}
                  value={usuario.edad}
                />

                <input
                  type="text"
                  name="profecion"
                  className="form-control mb-3"
                  placeholder="Ingresar la Profecion"
                  onChange={capturarInputs}
                  value={usuario.profecion}
                />
              </div>
              <button className="btn btn-primary">Guardar</button>
            </div>
          </form>
        </div>
        {/*  Esta seccion lista de usuarios */}
        <div className="col-md-8">
          <h2 className="text-center">Lista de Usuarios</h2>

          <div className="container card">
            <div className="card-body">
              {lista.map((list) => (
                <div key={list.id}>
                  <p>Nombre: {list.nombre}</p>
                  <p>Edad: {list.edad} </p>
                  <p>profecion: {list.profecion}</p>
                  <button className="btn btn-success">Editar</button>
                  <button className="btn btn-danger">Eliminar</button>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
