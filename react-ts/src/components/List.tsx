import { ReactNode } from "react"

interface ListProps<T> {
  items: T[],
  render(item: T): ReactNode,
  children : ReactNode
}

const List = <T,>({ items, render, children }: ListProps<T>) => {
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
    </>
  )
}

export default List