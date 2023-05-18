import React from 'react'
import './App.css'
import Movie from './components/Movie'



function App() {


  const movies = [
    { titulo: 'A VIAGEM', texto: 'iuahsf saifhasfhuashfo ausfiuas gf', ano: '1932', diretor: 'JOÃO' },
    { titulo: 'A CURA', texto: 'iuahsf saifhasfhuashfo gf', ano: '1985', diretor: 'CAIO' },
    { titulo: 'A RUA', texto: 'iuahsf ausfiuas gf', ano: '1958', diretor: 'MARIA' }
  ]

  const show = []

  movies.forEach((movie, index) => {

    movie.titulo = movies[index].titulo
    movie.texto = movies[index].texto
    movie.diretor = movies[index].diretor
    movie.ano = movies[index].ano

    exibir.push(
      <Movie info={movie}></Movie>
    )
  }
  )

  return (
    <div className='flex'>
      {show}
    </div>
  )

}

export default App
