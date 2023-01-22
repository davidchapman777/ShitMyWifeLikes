import React from 'react'
import { useFashionContext } from '../context/FashionContext'
import Error from './Error'
import FeaturedFashionProduct from './FeaturedFashionProduct'
import styled from 'styled-components'


const FeaturedFashionProducts = () => {
    const {
        featuredFashionProducts: featured,
        fashionProducts_error:error
    } = useFashionContext()
    
    
    if (error) {
        return <Error/>
    }
  return (
    <div className='featured'>
        {featured.map((item) => {
          return (
            <FeaturedFashionProduct key={item.id} {...item} />
        )
      })}
    </div>
  )
}


export default FeaturedFashionProducts
