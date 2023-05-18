function Movie(props) {
    return (
        <div className='movie'>
            <h3>{props.info.titulo}</h3>
            <p>
                {props.info.texto}<br/>
                <div>
                    <p>Ano da produção: {props.info.ano}</p>
                    <p>Diretor: {props.info.diretor}</p>
                </div>
            </p>
        </div>
    )
}

export default Movie