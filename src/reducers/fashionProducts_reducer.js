import {
    GET_FASHION_PRODUCTS_BEGIN,
    GET_FASHION_PRODUCTS_SUCCESS,
    GET_FASHION_PRODUCTS_ERROR
} from '../actions'
 

const fashionProducts_reducer = (state, action) => {
    if (action.type === GET_FASHION_PRODUCTS_BEGIN) {
        return {
            ...state,
            fashionProducts_loading:true
        }
    }
    if (action.type === GET_FASHION_PRODUCTS_SUCCESS) {
        const featuredFashionProducts = action.payload.filter((product) =>
            product.featured === true)
        return {
            ...state,
            fashionProducts_loading:false,
            fashionProducts: action.payload,
            featuredFashionProducts
        }
    }
    if (action.type === GET_FASHION_PRODUCTS_ERROR) {
        return {
            ...state,
            fashionProducts_loading: false,
            fashionProducts_error:true
        }
    }
    throw new Error (`No Matching '${action.type}' -action type`)
}

export default fashionProducts_reducer