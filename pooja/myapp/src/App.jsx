import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Navbar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import State from './components/State'
import Tab from './components/Tab'
import Counter from './components/Counter'
import Welcom from './components/Welcom'
import Api from './components/Api'
import Product from './components/Product'

function App() {
  

  return (
    <>
      
      
      <Navbar />
      {/* <h1>hello</h1> */}
      {/* <h2>welcome to home</h2> */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tab" element={<Tab/>} />
        <Route path="/states" element={<State />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/welcome" element={<Welcom />} />
        <Route path="/api" element={<Api />} />
        <Route path="/product" element={<Product/>}/>
        
      </Routes>
      
    
    

     
    </>
  )
}
  
  


export default App
