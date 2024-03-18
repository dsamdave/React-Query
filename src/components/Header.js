import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import SearchForm from './SearchForm'
import FilterForm from './FilterForm'
import ProductForm from './ProductForm'

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const [openProduct, setOpenProduct] = useState(false)


  return (
    <header>
      <nav>
        <p><Link to="/">Home</Link></p>
        <p onClick={() => setOpenProduct(true)}>Create Product</p>
        <p onClick={() => setOpenSearch(true)}>Search</p>
        <p onClick={() => setOpenFilter(true)}>Filter</p>
      </nav>

{/* -------- Search --------- */}
      {
        openSearch &&
        <Modal titleTxt="Search" setOpen={setOpenSearch}>
          <SearchForm />
        </Modal>
      }
      
{/* -------- Filter --------- */}
      {
        openFilter &&
        <Modal titleTxt="Filter" setOpen={setOpenFilter}>
          <FilterForm />
        </Modal>
      }

{/* -------- Product --------- */}
    {
        openProduct &&
        <Modal titleTxt="Create Product" setOpen={setOpenProduct}>
          <ProductForm btnTxt="Add" />
        </Modal>
      }
       
    </header>
  )
}

export default Header