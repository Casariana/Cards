import { useState } from 'react'
import './App.css'
import Boton from './components/Boton'
import CanvasComponent from './components/CanvasComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Iniciamos</h1>
      <CanvasComponent color="red" fondo="cyan"/>
      <br></br>
      <Boton />
      <Boton />
      <Boton />
      <Boton />
      <Boton />
      <Boton />
      <Boton />
      <br></br>
      <CanvasComponent color="Yellow" fondo="brown"/>
    </>
  )
}

export default App
