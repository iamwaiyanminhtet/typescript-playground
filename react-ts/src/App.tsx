import { useState } from "react"
import Counter from "./components/Counter";
import List from "./components/List";
import CounterReducer from "./components/CounterReducer";
import { CounterProvider } from "./context/CounterContex";

const App = () => {

  const [count, setCount] = useState<number>(0);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <CounterProvider>
        <>
          <Counter setCount={setCount}>Count is  {count}</Counter>
          <List items={['Hello', 'Hey', 'Hi']} render={(item) => <span>{item}</span>} >This is List</List>
          <hr />

          <CounterReducer />
        </>
      </CounterProvider>
    </div>
  )
}

export default App