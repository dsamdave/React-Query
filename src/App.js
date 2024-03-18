import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Search from './pages/Search'
import Filter from './pages/Filter'
import Header from './components/Header'


const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <Home /> } />
        <Route path='/products/:id' element={ <ProductDetail /> } />
        <Route path='/search/:value' element={ <Search /> } />
        <Route path='/filter/:option/:value' element={ <Filter /> } />
      </Routes>
    </>
  )
}

export default App