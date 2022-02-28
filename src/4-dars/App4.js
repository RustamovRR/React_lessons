import React, { useState } from 'react';
import Appbar from './Appbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersList from './UsersList'

import './App4.css'
import UserInfoCard from './UserInfoCard';

function App3(props) {
  const [open, setOpen] = useState(false)
  const [users, setUsers] = useState([])

  return (
    <div className='wrapper_app3'>
      <BrowserRouter>
        <Appbar open={open} setOpen={setOpen} />

        <section className='body_wrapper'>
          <Routes>
            <Route
              path='/'
              element={
                <UsersList
                  users={users}
                  setUsers={setUsers}
                />
              }
            />
            <Route
              path='/:id'
              element={
                <UserInfoCard
                  users={users}
                  setUsers={setUsers}
                />
              }
            />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}
export default App3;
