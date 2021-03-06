
import './App.css';

import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path ="/"  element={<Home />} /> 
      <Route path ="/cart" element={<Cart />} /> 
      <Route path="*" element={<NotFound />} /> 
    </Routes> 
   </BrowserRouter>
  
  )
}

export default App;
