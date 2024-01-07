import React, {useState} from 'react';
import Header from './Header'
import Form from './Form';
import Output from './Output'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (id) => {
    console.log(id);
    console.log(todos);
    setTodos(todos.filter(item => item !== id.task))
  }

  return (
    <div className="App">
      <Header title="Today's To Dos"/>
      <br></br>
      <Form addTodo={addTodo}/>
      {todos.map(todo => <Output task={todo} key={todo} deleteTodo={deleteTodo}/> )}
      {/* <Output array={todos} deleteTodo={deleteTodo}/> */}
    </div>
  );
}

export default App;