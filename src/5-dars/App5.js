import React, { useState } from 'react';
import Appbar from './Appbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersList from './UsersList'
import GlobalProvider from './Context';

import './App.css'
import UserInfoCard from './UserInfoCard';

function App3(props) {
  const [open, setOpen] = useState(false)

  return (
    <div className='wrapper_app3'>
      <GlobalProvider>
        <BrowserRouter>
          <Appbar open={open} setOpen={setOpen} />

          <section className='body_wrapper'>
            <Routes>
              <Route
                path='/'
                element={
                  <UsersList />
                }
              />
              <Route
                path='/:id'
                element={
                  <UserInfoCard />
                }
              />
            </Routes>
          </section>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}
export default App3;
