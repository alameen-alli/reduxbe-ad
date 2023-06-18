import './App.css';
import {useSelector} from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter App</h1>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
