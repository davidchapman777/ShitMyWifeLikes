import React from 'react'
import { useBeautyContext } from '../context/BeautyContext'
import Error from './Error'
import FeaturedBeautyProduct from './FeaturedBeautyProduct'
import styled from 'styled-components'


const FeaturedBeautyProducts = () => {
    const {
        featuredBeautyProducts: featured,
        beautyProducts_error: error
    } = useBeautyContext()
    
    
    if (error) {
        return <Error/>
    }
  return (

    <div className='featured'>
        {featured.map((item) => {
          return (
            <FeaturedBeautyProduct key={item.id} {...item} />
        )
      })}
    </div>
  )
}



export default FeaturedBeautyProducts
