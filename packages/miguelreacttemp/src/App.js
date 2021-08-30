import {useState,useEffect} from 'react'
import FriendStatus from "./demo/FriendStatus";
import Counter from "./demo/Counter";
import Example from "./demo/Example";

function App() {
  const [count, setCount] = useState(99);
  const [id, setId] = useState(null);
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => {
          setCount(count + 1);
          setId(Math.random());
        }}>
          Click me
        </button>
        <div><FriendStatus id={id}></FriendStatus></div>
        <Counter initialCount={0}></Counter>
        <Example/>
      </header>
    </div>
  );
}

export default App;
