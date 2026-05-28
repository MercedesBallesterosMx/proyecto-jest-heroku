import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)
  const [mensaje, setMensaje] = useState('')

  const aumentar = () => {
    setContador(contador + 1)
  }

  const disminuir = () => {
    setContador(contador - 1)
  }

  const mostrarMensaje = () => {
    setMensaje('Testing realizado correctamente')
  }

const variableSinUsar = 'Error ESLint'

console.log('Probando ESLint')

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>Proyecto Jest + ESLint</h1>

      <h2>Contador: {contador}</h2>

      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir} style={{ marginLeft: '10px' }}>
        Disminuir
      </button>

      <br />
      <br />

      <button onClick={mostrarMensaje}>Mostrar mensaje</button>

      <p>{mensaje}</p>
    </div>
    
  )
}

export default App