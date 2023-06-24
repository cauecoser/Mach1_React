import { createContext, useState } from "react";

const productContext = createContext()

export const productInitialState = {
    name: 'no name',
    price: '0,00',
    description: 'no description'
}

export function PorductProvider(props) {

    const [product, setProduct] = useState(productInitialState)

    return (
        <productContext.Provider value={{ product, setProduct }}>
            {props.children}
        </productContext.Provider>
    )
}

export default productContext