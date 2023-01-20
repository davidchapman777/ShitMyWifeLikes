import React, { useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/filter_reducer'
import { useElectronicsContext } from "./ElectronicsContext";
import {
    LOAD_PRODUCTS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS
} from '../actions'
const ElectronicFilterContext = React.createContext()


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

const ElectronicFilterProvider = ({ children }) => {
    const {electronicProducts}=useElectronicsContext()
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload:  electronicProducts  })
    }, [electronicProducts])

    useEffect(() => {
        dispatch({type:FILTER_PRODUCTS})
        dispatch({type:SORT_PRODUCTS})
    },[electronicProducts, state.sort, state.filters])
    
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

    return <ElectronicFilterContext.Provider value={{
        ...state,
        updateSort,
        updateFilters
    }}>{children}</ElectronicFilterContext.Provider>
}

export const useElectronicFilterContext = () => {
    return useContext(ElectronicFilterContext)
}

export {ElectronicFilterProvider}