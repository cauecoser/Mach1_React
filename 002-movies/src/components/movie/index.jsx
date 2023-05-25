export default function Movie(props) {
    return (
        <div>
            <h3>{props.movies.title}</h3>
            <div>
                <p>Diretor: {props.movies.director}</p>
                <p>Ano de lançamento: {props.movies.year}</p>
            </div>
            <div>
                <h4>Sinopse</h4>
                <p>{props.movies.summary}</p>
            </div>
        </div>
    )
}