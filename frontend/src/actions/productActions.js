import axios from "axios"
import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from "../constants/productConstants"


export const listProducts = () => async (dispatch) => {
    try{
        dispatch({type: PRODUCT_LIST_REQUEST})

        const {data} = await axios.get('https://ecommercedjango-dlr8.onrender.com/api/products')

        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        }
        )
    }
}

export const productDetails = (slug) => async (dispatch) => {
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`https://ecommercedjango-dlr8.onrender.com/api/products/${slug}`)
        console.log(data)

        dispatch({type:PRODUCT_DETAILS_SUCCESS, payload:data})

    }catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        }
        )
    }
}