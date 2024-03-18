import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'

import { deleteProduct, handleError } from '../api/productAPI'
import useLazyLoadImg from '../hooks/useLazyLoadImg'
import Modal from './Modal'
import ProductForm from './ProductForm'
import { toast } from 'react-toastify'

const ProductsCard = ({ product }) => {
  const [openProduct, setOpenProduct] = useState(false)

  const queryClient = useQueryClient()
  
  const { mutate, isLoading } = useMutation(deleteProduct, 
    {
      onSuccess: () => toast.success('Delete Product!'),
      onError: (error) => handleError(error),
      onSettled: () => queryClient.invalidateQueries({
        predicate: query => query.queryKey.startsWith('/products')
      })
    } 
  )

  const { ref } = useLazyLoadImg()

  const handleDelete = (id) => {
    if(window.confirm("Do you want to delete this?")){
      mutate(id)
    }
  }
  

  return (
    <div className='card'>
      <Link to={`/products/${product._id}`}>
        <img alt={product.image} className="lazy-load" ref={ref} />
      </Link>

      <div className="box">
        <h3>
          <Link to={`/products/${product._id}`}>
            <span/>
            {product.title}
          </Link>
        </h3>
        <h4>${product.price}</h4>

        <div className='btn_div'>
          <button className="btn_edit"
          onClick={() => setOpenProduct(true)}>
            Edit
          </button>

          <button className="btn_delete" disabled={isLoading}
          onClick={() => handleDelete(product._id)}>
            { isLoading ? 'Loading...' : 'Delete' }
          </button>
        </div>
      </div>

{/*--------------- Product Form--------- */}
    {
      openProduct &&
      <Modal titleTxt="Update Product" setOpen={setOpenProduct}>
        <ProductForm btnTxt="Update" data={product} />
      </Modal>
    }
    </div>
  )
}

export default ProductsCard