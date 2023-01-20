import React from 'react'
import { useDecorProductsContext } from '../context/DecorProductsContext'
import Error from './Error'
import Loading from './Loading'
import FeaturedDecorProduct from './FeaturedDecorProduct'
import styled from 'styled-components'


const FeaturedDecorProducts = () => {
    const {
        featuredDecorProducts:featured,
        decorProducts_loading: loading,
        decorProducts_error:error
    } = useDecorProductsContext()
    
    if (loading) {
        return <Loading/>
    }
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
