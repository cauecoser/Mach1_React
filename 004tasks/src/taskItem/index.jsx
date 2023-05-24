function TaskItem(props) {

    // const [task, setTask] = React.useState({
    //     {<TaskItem></TaskItem>}
    // })

    function onTaskComplete(complete) {
        props.task.complete = !complete
        console.log(props.task.title)
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