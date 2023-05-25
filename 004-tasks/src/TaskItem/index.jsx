import './Item.css'

export default function TaskItem(props) {

    return (
        <div className='item'>
            <h3>{props.title}</h3>
            <span onClick={() => props.onTaskComplete(props.title)}>
                {props.completed ? '- Tarefa concluída. -' : '- Tarefa pendente. -'}
            </span>
        </div>
    )
}