import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './component/Nav'
import Cocktail from './pages/Cocktail'
import CocktailDetails from './pages/CocktailDetails'
import PrivateRoute from './component/PrivateRoute'
import Login from './pages/Login'

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cocktail' element={<Cocktail />} />
      <Route path='/cocktail/:id' element={<PrivateRoute><CocktailDetails /></PrivateRoute> } />
      <Route path='/product' element={<h1>Product List</h1>} />
      <Route path='/add-product' element={<h1>Add Product</h1>} />
      <Route path='/edit-product/:id' element={<h1>Edit Product</h1>} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App