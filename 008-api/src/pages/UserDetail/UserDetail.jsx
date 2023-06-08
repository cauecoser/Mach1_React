import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import './UserDetail.css'

export default function UserDetail() {

    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setUser(data)
                setLoading(false)
            })
            .catch((e) => setError(e.message)
            )

    }, [])

    if (loading) {
        return <div>Charging...</div>
    }

    return (
        <div key={user.id} className="bigCard">
            <h1>User number {user.id}</h1>
            <p>Completed: {user.completed ? 'YES' : 'NO'}</p>
            <p>{user.title}</p>
            <Link className='back' to={`/userlist`}>Return to list</Link>
        </div>
    )
}