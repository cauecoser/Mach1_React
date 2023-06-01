import './Article.css'

export default function Article(props) {

    return (
        <>
            <div className='ArticleContainer'>
                <img src={props.imagee} alt="" />
                <h5>{props.type}</h5>
                <h2>{props.title}</h2>
                <hr />
                <p>{props.contentt}</p>
                <a href="">Saiba mais... →</a>
            </div>
        </>
    )
}