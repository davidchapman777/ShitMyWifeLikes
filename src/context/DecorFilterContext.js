import React, { useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/filter_reducer'
import { useDecorProductsContext }from'./DecorProductsContext'
import {
    LOAD_PRODUCTS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS
} from '../actions'
const DecorFilterContext = React.createContext()


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

const DecorFilterProvider = ({ children }) => {
    const { decorProducts }=useDecorProductsContext()
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload:  decorProducts  })
    }, [decorProducts])

    useEffect(() => {
        dispatch({type:FILTER_PRODUCTS})
        dispatch({type:SORT_PRODUCTS})
    },[decorProducts, state.sort, state.filters])
    
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

    return <DecorFilterContext.Provider value={{
        ...state,
        updateSort,
        updateFilters
    }}>{children}</DecorFilterContext.Provider>
}

export const useDecorFilterContext = () => {
    return useContext(DecorFilterContext)
}

export {DecorFilterProvider}