import './App.css'
import { ProductContext } from './ProductContext'
import { useContext } from 'react'

function App() {
  const { state, dispatch } = useContext(ProductContext)

  return (
    <>
      <div>{state}</div>
      <div>
        <button onClick={() => dispatch({type: 'ADD_PRODUCT'})}>ADD</button>
        <button onClick={() => dispatch({type: 'DEL_PRODUCT'})}>DEL</button>
        <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
      </div>
    </>
  )
}

export default App
