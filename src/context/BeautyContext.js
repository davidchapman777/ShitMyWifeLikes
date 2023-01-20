import {
    GET_BEAUTY_PRODUCTS_BEGIN,
    GET_BEAUTY_PRODUCTS_SUCCESS,
    GET_BEAUTY_PRODUCTS_ERROR
} from '../actions'
import reducer from '../reducers/beautyProducts_reducer'
import axios from 'axios';
import React, { useContext, useEffect,useReducer } from "react";
const BeautyContext = React.createContext()

const initialState = {
    beautyProducts: [],
    featuredBeautyProducts:[],
    beautyProducts_loading: false,
    beautyProducts_error: false,
}
const url = "/beautyProducts.json"

const BeautyProvider = ({ children }) => {
    const [state, dispatch]=useReducer(reducer, initialState)
   
    
    const fetchBeautyProducts = async (url) => {
        dispatch({ type: GET_BEAUTY_PRODUCTS_BEGIN })
        try {
            const response = await axios.get(url)
            const beautyProducts = response.data
            dispatch({type: GET_BEAUTY_PRODUCTS_SUCCESS, payload:beautyProducts})
        } catch (error) {
            dispatch({type:GET_BEAUTY_PRODUCTS_ERROR})
        }
    }
    useEffect(() => {
        fetchBeautyProducts(url)
    },[])

    return <BeautyContext.Provider value={{
        ...state
    }}>{children}</BeautyContext.Provider>
}

export const useBeautyContext = () => {
    return useContext(BeautyContext)
}
export {BeautyProvider}