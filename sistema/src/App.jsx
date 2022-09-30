import { useState } from "react";
import Home from "./components/Home"
import Login from "./components/Login"


function App() {

  const [usuario, setUsuario] = useState(null);
  return (
    <div className="container">
      {usuario ? <Login /> : <Home />}
    </div>

  )
}

export default App
