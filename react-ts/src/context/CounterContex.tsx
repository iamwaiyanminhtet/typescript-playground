import { ReactElement, createContext, useContext, useReducer } from "react"

type stateType = {
    count: number
}

const initialState: stateType = { count: 0 }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    ADD_SPECIFIC_AMOUNT
}

type reducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: number
}

const reducer = (state: stateType, action: reducerAction): stateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        case REDUCER_ACTION_TYPE.ADD_SPECIFIC_AMOUNT:
            return { ...state, count: state.count + action.payload }
        default:
            throw new Error()
    }
}

const useCounterContext = (initState: stateType) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
    const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
    const add_specific_amount = () => dispatch({ type: REDUCER_ACTION_TYPE.ADD_SPECIFIC_AMOUNT, payload: 5 })

    return { state, increment, decrement, add_specific_amount }
}

type UseCounterContextType = ReturnType<typeof useCounterContext>

const initialCounterContext: UseCounterContextType = {
    state: initialState,
    increment: () => { },
    decrement: () => { },
    add_specific_amount: () => { },
}

export const CounterContext = createContext<UseCounterContextType>(initialCounterContext)


type childrenType = {
    children? : ReactElement | ReactElement[] | undefined
}

export const CounterProvider = ({children} : childrenType) : ReactElement => {
    return (
        <CounterContext.Provider value={useCounterContext(initialState)}>
            {children}
        </CounterContext.Provider>
    )
}


export const useCounter = () : UseCounterContextType => {
    const { state , increment, decrement, add_specific_amount } = useContext(CounterContext)
    return { state, increment, decrement, add_specific_amount }
}

