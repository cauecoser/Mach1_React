import React from 'react'
import './App.css'
import UserCard from './components/UserCard/UserCard'

function App() {

  const users = [
    {name: 'JOHNNY',
    age: 20,
    city: 'New York',
    isPremium: true
  },
  {
    name: 'CARL',
    age: 7,
    city: 'Roma',
    isPremium: false
  },
  {
    name: 'YOSEN',
    age: 53,
    city: 'Zurich',
    isPremium: true
  }
]

  return (
    <>
        {
          users.map(user => <UserCard user={user} isPremium={user.isPremium}></UserCard>)}
    </>
  )
}

export default App
