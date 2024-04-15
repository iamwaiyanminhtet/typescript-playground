import { useState } from "react"
import Counter from "./components/Counter";
import List from "./components/List";

const App = () => {

  const [count, setCount] = useState<number>(0);

  return (
    <div style={{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      flexDirection : "column"
    }}>
    <Counter setCount={setCount}>Count is  {count}</Counter>
    <List items={['Hello', 'Hey', 'Hi']} render={(item) => <span>{item}</span> } >This is List</List>
    </div>
  )
}

export default App