import { ReactNode } from "react"
import { useCounter } from "../context/CounterContex";

interface ListProps<T> {
  items: T[],
  render(item: T): ReactNode,
  children : ReactNode
}

const List = <T,>({ items, render, children }: ListProps<T>) => {

  const { state } = useCounter();

  return (
    <>
    <h1>{children}</h1>
    <ul>
      {
        items.map((item, idx) =>
          <li key={idx} >
            {render(item)}
          </li>
        )
      }
    </ul>
    <p>counter context count {state.count}</p>
    </>
  )
}

export default List