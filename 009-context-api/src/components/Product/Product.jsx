import './Product.css'
import { useContext } from "react"
import productContext from "../../context"

export default function Product() {
    const { product } = useContext(productContext)

    return (
        <div className="container">
            <h1>{product.name}</h1>
            <p>- Price: U${product.price} -</p>
            <div className="descript">
                <p>Description: {product.description}</p>
            </div>
        </div>
    )
}