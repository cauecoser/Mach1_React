import './UserCard.css'

export default function UserCard(props) {
    return (
        <div>
            <div className="UserCard">
                <h3>{props.user.name}</h3>
                <div>
                    <p>Idade: {props.user.age}</p>
                    <p>Cidade: {props.user.city}</p>
                </div>
            </div>
            <div>
                <p>{props.isPremium ? '*Este é um usuário Premium' : null}</p>
            </div>
        </div> 
    )
}