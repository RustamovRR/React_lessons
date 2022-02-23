import React from 'react';
import Stateless from './Stateless'
import Statefull from './Statefull'
import StateCustomHook from './StateCustomHook'

import './App2.css'

function App2(props) {

  return (
    <div className='wrapper_app2'>
      {/* <Statefull /> */}
      {/* <Stateless /> */}
      <StateCustomHook />
    </div>
  );
}

export default App2;
