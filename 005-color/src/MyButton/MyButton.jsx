import './MyButton.css'

export default function MyButton (props) {
    return (
        <button className='mybutton' onClick={props.onclick}>
            {props.name}
        </button>
    )
}