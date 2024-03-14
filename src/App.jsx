import './App.css';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked');
  }

  const addFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>

    <Friends></Friends>
      <Counter></Counter>
      <Users></Users>
      <h1>React Core Concepts 2</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me too</button>
      <button onClick={() => {alert('third clicked')}}>third</button>
      <button onClick={() => addFive(3)}>Add</button>
      
    </>
  )
}

export default App
