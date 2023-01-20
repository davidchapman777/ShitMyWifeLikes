import React, { useContext, useReducer, useEffect } from 'react'
import reducer from '../reducers/fashionProducts_reducer'
import axios from 'axios'
import {
    GET_FASHION_PRODUCTS_BEGIN,
    GET_FASHION_PRODUCTS_SUCCESS,
    GET_FASHION_PRODUCTS_ERROR
} from '../actions'

const url = '/fashionProducts.json'

const FashionContext = React.createContext()

const initialState = {
    fashionProducts: [],
    featuredFashionProducts: [],
    fashionProducts_loading: false,
    fashionProducts_error:false
}

const FashionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const fetchFashionProducts = async (url) => {
        dispatch({ type: GET_FASHION_PRODUCTS_BEGIN })
        try {
            const response = await axios.get(url)
            const fashionProducts = response.data
            dispatch({type:GET_FASHION_PRODUCTS_SUCCESS, payload:fashionProducts})
        } catch (error) {
            dispatch({type:GET_FASHION_PRODUCTS_ERROR})
        }
    }
    useEffect(() => {
        fetchFashionProducts(url)
    },[])

    return <FashionContext.Provider value={{
        ...state
    }}>{ children}</FashionContext.Provider>
}

export const useFashionContext = () => {
    return useContext(FashionContext)
}
export {FashionProvider}