import './Button.css'
import { useContext } from 'react'
import productContext from '../../context'
import { productInitialState } from '../../context'

export default function Button() {

    const { product, setProduct } = useContext(productContext)

    function insertData() {
        setProduct(
            {
                name: "Office Chair",
                price: "180,00",
                description: "Make your job efficient. Comfortable chair with armrests and adjustable hight."
            }
        )
    }

    function resetData() {
        setProduct(productInitialState)
    }

    return (
        <div className='buttonContainer'>
            <button className="button" onClick={insertData}>INSERT DATA</button>
            <button className="button" onClick={resetData}>RESET DATA</button>
        </div>
    )
}