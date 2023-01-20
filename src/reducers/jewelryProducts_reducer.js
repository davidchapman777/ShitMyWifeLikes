import {
    GET_JEWELRY_PRODUCTS_BEGIN,
    GET_JEWELRY_PRODUCTS_SUCCESS,
    GET_JEWELRY_PRODUCTS_ERROR
} from '../actions'

const jewelryProducts_reducer = (state, action) => {
    if (action.type === GET_JEWELRY_PRODUCTS_BEGIN) {
        return {
            ...state,
            jewelryProducts_loading:true
        }
    }
    if (action.type === GET_JEWELRY_PRODUCTS_SUCCESS) {
        const featuredJewelryProducts = action.payload.filter((product) =>
            product.featured === true)
        return {
            ...state,
            jewelryProducts_loading: false,
            jewelryProducts: action.payload,
            featuredJewelryProducts
        }
    }
    if (action.type === GET_JEWELRY_PRODUCTS_ERROR) {
        return {
            ...state,
            jewelryProducts_loading: false,
            jewelryProducts_error: true
        }
    }
    throw new Error`(No Matching '${action.type}' -action type)`
}
export default jewelryProducts_reducer