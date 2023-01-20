import {
    GET_DECOR_PRODUCTS_BEGIN,
    GET_DECOR_PRODUCTS_SUCCESS,
    GET_DECOR_PRODUCTS_ERROR
} from '../actions'

const beautyProducts_reducer = (state,action) => {
    if (action.type === GET_DECOR_PRODUCTS_BEGIN) {
        return {...state, decorProducts_loading:true}
    }
    if (action.type === GET_DECOR_PRODUCTS_SUCCESS) {
        const featuredDecorProducts = action.payload.filter((product) =>
            product.featured === true
        )
        return {...state, decorProducts_loading: false, decorProducts: action.payload,
            featuredDecorProducts
        }
    }
    if (action.type === GET_DECOR_PRODUCTS_ERROR) {
        return {...state, decorProducts_loading:false, decorProducts_error:true}
    }
    throw new Error (`No Matching '${action.type}' -action type`)
}
export default beautyProducts_reducer