import './ArticleDetails.css'
import { useParams } from 'react-router-dom'

export default function ArticleDetails(props) {

    const art = useParams()
    
    
    return (
        <>
            <div className='ArticleContainerDet'>
                <img src={props.imagee} />
                <h5>{props.type}</h5>
                <h2>{art.title}</h2>
                <hr />
                <p>{props.contentt}</p>
                {/* <a href="">Saiba mais... →</a> */}
            </div>
        </>
    )
}