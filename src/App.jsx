import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserList } from './components/UserList';
import { AddUser } from './components/AddUser';
import { UpdateUser } from './components/UpdateUser';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<UserList />}></Route>
          <Route path='/adduser' element={<AddUser />}></Route>
          <Route path='/updateuser/:id' element={<UpdateUser />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
