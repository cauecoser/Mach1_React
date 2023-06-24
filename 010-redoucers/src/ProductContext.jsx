import { createContext, useReducer } from "react";
import ProductReducer, { ProductsInitialState } from "./ProductReducer";

export const ProductContext = createContext()

export function ProductProvider(props) {
    const [state, dispatch] = useReducer(ProductReducer, ProductsInitialState)
    return (
        <ProductContext.Provider value = {{state, dispatch}}>
            {props.children}
        </ProductContext.Provider>
    )
}