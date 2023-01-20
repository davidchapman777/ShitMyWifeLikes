import React, { useContext, useReducer, useEffect } from 'react'
import reducer from '../reducers/electronicsProducts_reducer'
import axios from 'axios'
import {
    GET_ELECTRONIC_PRODUCTS_BEGIN,
    GET_ELECTRONIC_PRODUCTS_SUCCESS,
    GET_ELECTRONIC_PRODUCTS_ERROR
} from '../actions'
const url = '/electronicProducts.json'

const ElectronicsContext = React.createContext()

const initialState = {
    electronicProducts: [],
    featuredElectronicProducts: [],
    electronicProducts_loading: false,
    electronicProducts_error: false
}

const ElectronicsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const fetchElectronicProducts = async (url) => {
        dispatch({type:GET_ELECTRONIC_PRODUCTS_BEGIN})
        try {
            const response = await axios.get(url)
            const electronicProducts = response.data
            dispatch({type:GET_ELECTRONIC_PRODUCTS_SUCCESS, payload:electronicProducts})
        } catch (error) {
            dispatch({type:GET_ELECTRONIC_PRODUCTS_ERROR})
        }
    }
    useEffect(() => {
        fetchElectronicProducts(url)
    },[])


    return <ElectronicsContext.Provider value={{
        ...state
    }}>{children}</ElectronicsContext.Provider>
}

export const useElectronicsContext = () => {
    return useContext(ElectronicsContext)
}

export {ElectronicsProvider}