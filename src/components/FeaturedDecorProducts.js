import React from 'react'
import { useDecorProductsContext } from '../context/DecorProductsContext'
import Error from './Error'
import FeaturedDecorProduct from './FeaturedDecorProduct'
import styled from 'styled-components'


const FeaturedDecorProducts = () => {
    const {
        featuredDecorProducts:featured,
        decorProducts_error:error
    } = useDecorProductsContext()
    
    
    if (error) {
        return <Error/>
    }
  return (

    <div className='featured'>
        {featured.map((item) => {
          return (
            <FeaturedDecorProduct key={item.id} {...item} />
        )
      })}
    </div>
  )
}



export default FeaturedDecorProducts
