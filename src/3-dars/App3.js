import React, { useState } from 'react';
import Appbar from './Appbar'
import LeftMenu from './LeftMenu'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import UsersList from './UsersList'

import './App3.css'

function App3(props) {
  const [open, setOpen] = useState(false)

  return (
    <div className='wrapper_app3'>
      <Appbar open={open} setOpen={setOpen} />
      {/* <BrowserRouter>
        <LeftMenu open={open} setOpen={setOpen} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter> */}
      <UsersList />
    </div>
  );
}
export default App3;


// const Home = () => <h1>Home</h1>

// const About = () => {
//   const params = useParams()
//   console.log(params)

//   return (
//     <div>
//       <h1>About</h1>
//     </div>
//   )
// }

// const Dashboard = () => <h1>Dashboard</h1>