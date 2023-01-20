import React from 'react'
import { useFashionContext } from '../context/FashionContext'
import Error from './Error'
import Loading from './Loading'
import FeaturedFashionProduct from './FeaturedFashionProduct'
import styled from 'styled-components'


const FeaturedFashionProducts = () => {
    const {
        featuredFashionProducts: featured,
        fashionProducts_loading: loading,
        fashionProducts_error:error
    } = useFashionContext()
    
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
            <FeaturedFashionProduct key={item.id} {...item} />
        )
      })}
    </div>
  )
}


export default FeaturedFashionProducts
