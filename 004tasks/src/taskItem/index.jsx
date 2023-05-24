import { useState } from 'react'

function TaskItem(props) {

    // const [task, setTask] = React.useState({
    //     {<TaskItem></TaskItem>}
    // })

    const [complete, setComplete] = useState(false)

    function onTaskComplete(complete) {
        setComplete(props.task.complete = !complete)
        console.log(props.task.complete)
        // setTask({ ...title, complete: !complete })
    }


    return (
        <div className="flex" onClick={() => onTaskComplete(props.task.complete)}>
            <h3 className="title">{props.task.title}</h3>
            <span></span>
        </div>
    )
}

export default TaskItem