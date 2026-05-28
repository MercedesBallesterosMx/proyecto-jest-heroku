import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('Pruebas del componente App', () => {
  test('muestra el titulo principal', () => {
    render(<App />)

    const titulo = screen.getByText(/Proyecto Jest + ESLint/i)

    expect(titulo).toBeInTheDocument()
  })

  test('incrementa el contador', () => {
    render(<App />)

    const boton = screen.getByText(/Aumentar/i)

    fireEvent.click(boton)

    expect(screen.getByText(/Contador: 1/i)).toBeInTheDocument()
  })

  test('muestra mensaje correctamente', () => {
    render(<App />)

    const botonMensaje = screen.getByText(/Mostrar mensaje/i)

    fireEvent.click(botonMensaje)

    expect(
      screen.getByText(/Testing realizado correctamente/i)
    ).toBeInTheDocument()
  })
})