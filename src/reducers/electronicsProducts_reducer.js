import {
    GET_ELECTRONIC_PRODUCTS_BEGIN,
    GET_ELECTRONIC_PRODUCTS_SUCCESS,
    GET_ELECTRONIC_PRODUCTS_ERROR
} from '../actions'

const electronicProducts_reducer = (state, action) => {
    if (action.type === GET_ELECTRONIC_PRODUCTS_BEGIN) {
        return {
            ...state,
            electronicProducts_loading: true
        }
    }
    if (action.type === GET_ELECTRONIC_PRODUCTS_SUCCESS) {
        const featuredElectronicProducts = action.payload.filter((product) =>
            product.featured === true)
        return {
            ...state,
            electronicProducts_loading: false,
            electronicProducts: action.payload,
            featuredElectronicProducts
        }
    }
    if (action.type === GET_ELECTRONIC_PRODUCTS_ERROR) {
        return {
            ...state,
            electronicProducts_loading: false,
            electronicProducts_error:true}
    }
    throw new Error (`No Matching '${action.type}'-action type`)
}
export default electronicProducts_reducer