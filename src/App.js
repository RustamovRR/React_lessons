import React from 'react';
import ButtonFunction from './ButtonFunction'
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
      {show && <ButtonFunction />}
    </div>
  );
}

export default App;
