import { useState } from 'react'
import './App.css'
import Boton from './components/Boton'
import CanvasComponent from './components/CanvasComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Iniciamos</h1>
      <CanvasComponent />
      <br></br>
      <Boton></Boton>
      <Boton></Boton>
      <Boton></Boton>
    </>
  )
}

export default App
