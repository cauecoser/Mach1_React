import '../movie/style.css'

export default function Movie(props) {
    return (
        <div className='MovieCard'>
            <h3>{props.movies.title.toUpperCase()}</h3>
            <div className='info'>
                <p>Diretor: {props.movies.director}</p>
                <p>Ano de lançamento: {props.movies.year}</p>
            </div>
            <div className='sinopse'>
                <h4>SINOPSE</h4>
                <p>{props.movies.summary}</p>
            </div>
        </div>
    )
}