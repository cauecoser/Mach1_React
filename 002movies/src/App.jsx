import React from 'react'
import './App.css'
import Movie from './components/Movie'

function App() {

  const movies = [
    { titulo: 'A VIAGEM', texto: 'iuahsf saifhasfhuashfo ausfiuas gf', ano: '1932', diretor: 'JOÃO' },
    { titulo: 'A CURA', texto: 'iuahsf saifhasfhuashfo gf', ano: '1985', diretor: 'CAIO' },
    { titulo: 'A RUA', texto: 'iuahsf ausfiuas gf', ano: '1958', diretor: 'MARIA' }
  ]

  return (
    <div className='flex'>
      <h1>MOVIES LIST</h1>
      {movies.map((movie) => (
        <Movie info={movie} />
    ))}
      </div>
  )
}

export default App
