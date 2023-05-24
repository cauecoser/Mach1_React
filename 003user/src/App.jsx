import React from 'react'
import './App.css'
import UserCard from './UserCard'

function App() {

  const users = [
    { nome: 'user_1', idade: 20, sexo: 'M', endereco: 'Rua_1, Cidade_1' },
    { nome: 'user_2', idade: 40, sexo: 'F', endereco: 'Rua_2, Cidade_2' },
    { nome: 'user_3', idade: 65, sexo: 'M', endereco: 'Rua_3, Cidade_3' }
  ]

  return (
    <>
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </>
  )
}

export default App
