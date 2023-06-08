import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import './UserList.css'

export default function UserList() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)                    // Questionar funcionamento do catch associado ao do useState de error
    // Questionar sobre NavLink x Link

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => {
                // throw new Error("Erro no carregamento dos dados!")
                setUsers(data)
                setLoading(false)
            })
            .catch((e) => setError(e.message)
            )

    }, [])

    if (error) {
        return <div>{error}</div>
    }

    if (loading) {
        return <div>Charging...</div>
    }

    return (
        <>
            <h1>LISTA DE USUÁRIOS</h1>
            <div className="fatherDiv">
                {
                    users.map((user) => (
                        <div key={user.id} className="card">
                            <h3>User number {user.id}</h3>
                            <p>Completed: {user.completed ? 'YES' : 'NO'}</p>
                            <p>{user.title}</p>
                            <Link className='info' to={`/userlist/${user.id}`}>More info...</Link>
                        </div>
                    ))}
            </div>
        </>
    )
}