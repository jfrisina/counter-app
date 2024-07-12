import { useReducer, useState } from 'react'
import './App.css'

const ACTIONS = {
INCREMENT: 'increment',
DECREMENT: 'decrement'
}

function reducer(state, action) { // takes in current state, and thentakes an action from the dispactch function from below
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default: 
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0}) // passing in count object instead of just 0 because generally working with more complex things. calling reducer function above. 
  const [count, setCount] = useState(0)

  function increment(){
    dispatch({ type: ACTIONS.INCREMENT })
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT }) 
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

export default App
