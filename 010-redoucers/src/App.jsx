import './App.css'
import { ProductContext } from './ProductContext'
import { useContext } from 'react'

function App() {
  const { state, dispatch } = useContext(ProductContext)

  return (
    <div className='mainDiv'>
      <div className='result'>{state.join()}</div>
      <div className='buttons'>
        <button className='button' onClick={() => dispatch({type: 'ADD_PRODUCT'})}>ADD</button>
        <button className='button' onClick={() => dispatch({type: 'DEL_PRODUCT'})}>DEL</button>
        <button className='button' onClick={() => dispatch({type: 'RESET'})}>RESET</button>
      </div>
    </div>
  )
}

export default App
