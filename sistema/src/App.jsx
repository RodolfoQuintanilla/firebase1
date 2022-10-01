import { useState } from "react";
import Home from "./components/Home"
import Login from "./components/Login"

import firebaseapp from './credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth(firebaseapp)
function App() {

  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })

  return (
    <div className="container">
      {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
    </div>

  )
}

export default App
