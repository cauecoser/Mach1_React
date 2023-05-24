import TaskItem from "../taskItem"

function TaskList() {

    const tasks = [
        { title: 'Title 1', complete: false },
        { title: 'Title 2', complete: false },
        { title: 'Title 3', complete: false }
    ]

    return (
        <>
            {
                tasks.map((task) => (
                    <TaskItem task={task} />
                ))
            }
        </>
    )
}

export default TaskList