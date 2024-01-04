import React from 'react';
import Header from './Header'
import Button from './Button'

function App() {
  const handleSubmit = () => {
    console.log('Submitted')
  }

  const handleDelete = () => {
    console.log('Deleted')
  }

  return (
    <div className="App">
      <Header title="Today's To Dos"/>
      <Button value='Submit' onClick={handleSubmit} />
      <Button value='Delete' onClick={handleDelete} />
    </div>
  );
}

export default App;