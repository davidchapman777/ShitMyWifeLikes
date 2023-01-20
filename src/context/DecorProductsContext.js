import React, { useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/decorProducts_reducer'
import axios from "axios";
import {
    GET_DECOR_PRODUCTS_BEGIN,
    GET_DECOR_PRODUCTS_SUCCESS,
    GET_DECOR_PRODUCTS_ERROR
} from '../actions'
const url = '/decorProducts.json'

const DecorProductsContext = React.createContext()

const initialState = {
    decorProducts: [],
    featuredDecorProducts:[],
    decorProducts_loading: false,
    decorProducts_error:false
}

const DecorProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const fetchDecorProducts = async (url) => {
        dispatch({type:GET_DECOR_PRODUCTS_BEGIN})
        try {
            const response = await axios.get(url)
            console.log(response)
            const decorProducts = response.data
            dispatch({type:GET_DECOR_PRODUCTS_SUCCESS, payload: decorProducts})
        } catch (error) {
            dispatch({type:GET_DECOR_PRODUCTS_ERROR})
        }
    }
    useEffect(() => {
        fetchDecorProducts(url)
    },[])

    return <DecorProductsContext.Provider value={{
        ...state
    }}>{children}</DecorProductsContext.Provider>
}

export const useDecorProductsContext = () => {
    return useContext(DecorProductsContext)
}
export {DecorProductsProvider}