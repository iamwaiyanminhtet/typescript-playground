import { useCounter } from "../context/CounterContex"

const CounterReducer = () => {

    const { state, increment, decrement, add_specific_amount } = useCounter();
   
    return (
        <div>
            <h1>Count useReducer</h1>
            <p>{state.count}</p>
            <button onClick={increment} >+</button>
            <button onClick={decrement} >-</button>
            <button onClick={add_specific_amount} >add</button>
        </div>
    )
}

export default CounterReducer