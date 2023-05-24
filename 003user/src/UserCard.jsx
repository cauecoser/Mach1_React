function UserCard(props) {
    return (
        <>
            <p>Nome: {props.user.nome}</p>
            <p>Idade: {props.user.idade}</p>
            <p>Sexo: {props.user.sexo}</p>
            <p>Endereço: {props.user.endereco}</p>
        </>
    )
}

export default UserCard