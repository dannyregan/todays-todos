import React, {useState} from 'react';
import Header from './Header'
import Form from './Form';
import Output from './Output'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }
    console.log(todos);

  return (
    <div className="App">
      <Header title="Today's To Dos"/>
      <br></br>
      <Form addTodo={addTodo}/>
      <Output array={todos}/>
    </div>
  );
}

export default App;