import React from 'react';
import Button from './Button'
import './App.css';

function App(props) {
  const [show, setShow] = React.useState(true)

  const handleShow = () => {
    setShow(false)
  }

  return (
    <div className="App">

      <button onClick={handleShow}>
        show
      </button>
      {show && <Button />}
    </div>
  );
}

export default App;
