import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, login } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch()
  console.log(isLogged)
  return (
    <div className="App">
        <h1>Hello World</h1>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(login())}>Log In</button>
        {isLogged && <h3>You are logged in!</h3>}
    </div>
  );
}

export default App;
