import React from 'react'
import './App.css'
import Movie from './components/movie'

function App() {

  const movies = [
    {
      title: 'Title One',
      director: 'Director One',
      year: 2002,
      summary: 'Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 Summary 1 '
    },

    {
      title: 'Title Two',
      director: 'Director Two',
      year: 2011,
      summary: 'Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 Summary 2 '
    },

    {
      title: 'Title Three',
      director: 'Director Three',
      year: 2007,
      summary: 'Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 Summary 3 '
    }
  ]

  return (
    <>
      <h1>MOVIE LIST</h1>
      {
        movies.map(movie => <Movie key={movie.title} movies={movie} />)
      }
    </>
  )
}

export default App
