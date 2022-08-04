import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import { useState } from 'react'
import Login from './layout/Login'
import AddClient from './pages/AddClient'
import EditClient from './pages/EditClient'
import ViewClient from './pages/ViewClient'
import Layout from './layout/Layout'
import Init from './pages/Init'
import LoginForm from './pages/LoginForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login/>}>          
          <Route index element={<LoginForm/>}/>
        </Route>

        <Route path='/clients' element={<Layout/>}>
          <Route index element={<Init/>} />
          <Route path="add" element={<AddClient/>} />
          <Route path="edit/:id" element={<EditClient/>} />
          <Route path=":id" element={<ViewClient/>} />

        </Route>        

      </Routes>
    </BrowserRouter>
  )
}

export default App
