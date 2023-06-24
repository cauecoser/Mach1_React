// import { useState } from "react"

export const ProductsInitialState = []

export default function ProductReducer(state, action) {

    const newProduct = parseInt(Math.random()*10) 

    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, newProduct]

        case 'DEL_PRODUCT':
            state.pop()
            return [...state]
            
        default:
            return ProductsInitialState
    }
}