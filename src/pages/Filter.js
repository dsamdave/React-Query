import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useInfiniteQuery, useQueryClient } from 'react-query'

import Products from '../components/Products'
import Sorting from '../components/Sorting'
import { useMyContext } from '../context/store'
import { getInfiniteData } from '../api/productAPI'
import useInView from '../hooks/useInView'

const Filter = () => {
  const { option, value } = useParams()
  const { sort } = useMyContext()
  const [limit, setLimit] = useState(2)

  const { ref, inView } = useInView()
  const queryClient = useQueryClient()

  const key = `/products?price[${option}]=${value}&sort=${sort}&limit=${limit}`;

  queryClient.setQueryData('keys', {k1: '', k2: key})


  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(key, getInfiniteData, {
    getNextPageParam: (lastPage, pages) => {
      // console.log({lastPage, pages})
      const { products } = lastPage;
      if(products.length >= limit){
        return pages.length + 1;
      }else{
        return undefined
      }
    },
  }) 

  useEffect(() => {
    if(inView){
      fetchNextPage()
    }
  }, [inView, fetchNextPage])
  

  return (
    <> 
      <Sorting />
      
      <div className='products'>
        {
          data?.pages.map((page, index) => (
            <Products key={index} products={page.products} />
          ))
        }
      </div>
      
      { 
        isFetching && <p style={{textAlign: 'center'}}>Loading...</p> 
      }
      
      { 
        error && <p style={{textAlign: 'center'}}>{error.message}</p> 
      }

      <button className="btn-load_more"
      onClick={() => fetchNextPage()} 
      disabled={!hasNextPage || isFetchingNextPage}
      ref={ref}
      style={{display: (data && hasNextPage) ? 'block' : 'none'}}
      >
        Load more
      </button>
    </>
  )
}

export default Filter