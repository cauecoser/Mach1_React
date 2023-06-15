import { useContext } from "react"
import Context from "../../context"

export default function Product() {
    const product = useContext(Context)

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Cost: {product.cost}</p>
            <div className="descript">
                <p>Description: {product.description}</p>
            </div>
        </div>
    )
}