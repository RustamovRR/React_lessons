import React, { useState } from 'react';
import Appbar from './Appbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountryLists from './CountryLists'
import GlobalProvider from './Context';

import './App.css'

function App3(props) {

  return (
    <div className='wrapper_app3'>
      <GlobalProvider>
        <BrowserRouter>
          <Appbar />

          <section className='body_wrapper'>
            <Routes>
              <Route
                path='/'
                element={<CountryLists />}
              />
            </Routes>
          </section>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}
export default App3;
