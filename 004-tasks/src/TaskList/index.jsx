import './List.css'
import { useState } from 'react'
import TaskItem from "../TaskItem"

const tasks = [
    { title: 'Cortar a grama com o cortador.', completed: true },
    { title: 'Pintar o portão.', completed: false },
    { title: 'Varrer a varanda.', completed: false }
]


export default function TaskList() {

    const [completed, setCompleted] = useState(tasks)

    function handleTaskComplete(title) {

        tasks.map(task => {
            if (task.title == title) {
                task.completed = !task.completed
            }
        })
        setCompleted([...tasks])
    }

    return (
        <>
            <h1>LISTA DE TAREFAS</h1>
            <div className='list'>
                {tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        title={task.title}
                        completed={task.completed}
                        onTaskComplete={handleTaskComplete} >
                    </TaskItem>
                ))}
            </div>
        </>
    )
}