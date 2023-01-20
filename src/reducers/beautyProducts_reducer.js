import { 
    GET_BEAUTY_PRODUCTS_BEGIN,
    GET_BEAUTY_PRODUCTS_SUCCESS,
    GET_BEAUTY_PRODUCTS_ERROR,
    UPDATE_SORT,
    SORT_PRODUCTS
} from '../actions'

const beautyProducts_reducer = (state, action) => {
    if (action.type === GET_BEAUTY_PRODUCTS_BEGIN) {
        return { ...state, beautyProducts_loading:true}
    }
    if (action.type === GET_BEAUTY_PRODUCTS_SUCCESS) {
        const featuredBeautyProducts = action.payload.filter((product) => 
            product.featured === true
        )
        return{...state, beautyProducts_loading:false, beautyProducts:action.payload, featuredBeautyProducts}
    }
    if (action.type === GET_BEAUTY_PRODUCTS_ERROR) {
        return {...state, beautyProducts_loading:false, beautyProducts_error:true}
    }
     if (action.type === UPDATE_SORT) {
        return {
            ...state,
            sort:action.payload
        }
    }
    if (action.type === SORT_PRODUCTS) {
        const { sort, filtered_products } = state
        let tempProducts = [...filtered_products]
        if (sort === 'price-lowest') {
            tempProducts = tempProducts.sort((a,b) =>  a.price - b.price)
        }
        if (sort === 'price-highest') {
            tempProducts = tempProducts.sort((a,b)=> b.price - a.price)
        }
        if (sort === 'name-a') {
            tempProducts = tempProducts.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
        }
        if (sort === 'name-z') {
            tempProducts = tempProducts.sort((a, b) => {
                return b.name.localeCompare(a.name)
            })
        }
        return{...state, filtered_products:tempProducts}
    }
    throw new Error (`No matching '${action.type}' -action type`)
}
export default beautyProducts_reducer