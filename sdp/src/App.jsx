import React from 'react'
import Login from './pages/Shared/login'
import Register from './pages/Shared/register'
import Home from './pages/Shared/Home'
import Error from './pages/Shared/Error'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Weblayout from './components/layout/weblayout'

const App = () => {
  return (
   <div>
    <BrowserRouter>
    <Routes>
     <Route element={<Weblayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='*' element={<Error/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
