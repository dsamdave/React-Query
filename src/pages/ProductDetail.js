import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'

import ProductInfo from '../components/ProductInfo'
import { getData } from '../api/productAPI'

const ProductDetail = () => {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const keys = queryClient.getQueryData('keys')
  // console.log(keys)

  const key = `/products/${id}`;
  const { 
    data: product, isLoading, error 
  } = useQuery(key, getData, {
    enabled: !!id,
    cacheTime: 0,
    initialData: () => {
      if(keys?.k1){
        const data = queryClient.getQueryData(keys.k1)
        return data.products.find(d => d._id === id)
      }

      if(keys?.k2){
        const pages = queryClient.getQueryData(keys.k2)?.pages

        const products = pages.reduce((result, current) => {
          return [...result, ...current.products]
        }, [])

        return products.find(d => d._id === id)
      }
    }
  })


  return (
    <main>
      { product && <ProductInfo product={product} /> }
      { 
        isLoading && <p style={{textAlign: 'center'}}>Loading...</p> 
      }
      { 
        error && <p style={{textAlign: 'center'}}>{error.message}</p> 
      }
    </main>
  )
}

export default ProductDetail