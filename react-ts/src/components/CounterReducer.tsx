import { useReducer } from "react"

const CounterReducer = () => {

    const initialState = { count: 0 }

    const enum REDUCER_ACTION_TYPE {
        INCREMENT,
        DECREMENT,
        ADD_SPECIFIC_AMOUNT
    }

    type reducerAction = {
        type: REDUCER_ACTION_TYPE,
        payload? : number
    }

    const reducer = (state: typeof initialState, action: reducerAction): typeof initialState => {
        switch (action.type) {
            case REDUCER_ACTION_TYPE.INCREMENT:
                return { ...state, count: state.count + 1 }
            case REDUCER_ACTION_TYPE.DECREMENT:
                return { ...state, count: state.count - 1 }
            case REDUCER_ACTION_TYPE.ADD_SPECIFIC_AMOUNT:
                return { ...state, count: state.count + action.payload}
            default:
                throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
    const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
    const add_specific_amount = () => dispatch({ type: REDUCER_ACTION_TYPE.ADD_SPECIFIC_AMOUNT, payload : 5 })
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