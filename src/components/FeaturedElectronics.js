import React from 'react'
import { useElectronicsContext } from '../context/ElectronicsContext'
import FeaturedElectronic from './FeaturedElectronic'
import Error from './Error'
import Loading from './Loading'
import styled from 'styled-components'


const FeaturedElectronics = () => {
    const {
        featuredElectronicProducts: featured,
    electronicProducts_loading: loading,
    electronicProducts_error: error
    } = useElectronicsContext()
    
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
            <FeaturedElectronic key={item.id} {...item} />
        )
      })}
    </div>
    
  )
}





export default FeaturedElectronics
