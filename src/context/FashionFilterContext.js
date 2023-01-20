import React, { useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/filter_reducer'
import {useFashionContext}from './FashionContext'
import {
    LOAD_PRODUCTS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS
} from '../actions'
const FashionFilterContext = React.createContext()


const initialState = {
    all_products:[],
    filtered_products: [],
    sort: 'price lowest',
    filters: {
        min_price: 0,
        max_price: 0,
        price:0
    }
}

const FashionFilterProvider = ({ children }) => {
    const { fashionProducts }=useFashionContext()
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload:  fashionProducts  })
    }, [fashionProducts])

    useEffect(() => {
        dispatch({type:FILTER_PRODUCTS})
        dispatch({type:SORT_PRODUCTS})
    },[fashionProducts, state.sort, state.filters])
    
    const updateSort = (e) => {
        const value = e.target.value
        dispatch({type:UPDATE_SORT,payload:value})
    }
    const updateFilters = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (name === 'price') {
            value = Number(value)
            dispatch({type:UPDATE_FILTERS,payload:{name, value}})
        }
    }

    return <FashionFilterContext.Provider value={{
        ...state,
        updateSort,
        updateFilters
    }}>{children}</FashionFilterContext.Provider>
}

export const useFashionFilterContext = () => {
    return useContext(FashionFilterContext)
}

export {FashionFilterProvider}