
/*import all the action types from constants , different functions are made in 
actions on the basis of types,there are two parameters type and data.These functions are basically called from view
sending in the data ,the current state.*/
import {ActionTypes} from '../Constants/action-types'
export const setproducts=(products={})=>
{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const getproducts=(products={})=>
{
    return{
        type:ActionTypes.GET_PRODUCTS,
        payload:products
    }
}
export const singlepro=(solpro)=>
{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:solpro
    }

}
export const removeproduct=()=>
{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCTS,
        payload:''
    }

}
export const setproductsError=(e)=>
{
    return{
        type:ActionTypes.SET_PRODUCTS_ERROR,
        payload:e
    }
}
export const getDetails=(id)=>
{
    return{
        type:ActionTypes.GET_DETAILS,
        payload:id
    }
}