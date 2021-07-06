/*initial state is described and in reducer function state and type and payload is destructured from aaction and from here 
  */
import { ActionTypes } from "../Constants/action-types";
const initialstate=
{
    product:[]
}

export const productReducer=(state=initialstate,{type,payload})=>
{
switch(type)
{
    case ActionTypes.SET_PRODUCTS:
        return {...state,product:payload};
   
     default:
          return state;
        }

}
export const getpro=(state=initialstate,{type,payload})=>
{
switch(type)
{
    case ActionTypes.GET_PRODUCTS:
        return {...state,product:payload};
   
     default:
          return state;
        }

}
export const selected=(state=initialstate,{type,payload})=>
{
switch(type)
{
    
    case ActionTypes.SELECTED_PRODUCTS:
        return{...state,product:payload} 
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
        return  {}  
     default:
          return state;
        }

}
export const setproductError=(state=initialstate,{type,payload})=>
{  switch(type)
   {case ActionTypes.SET_PRODUCTS_ERROR:
     return {product:payload}
     default:
          return state;
    }
}
export const getDetails=(state=initialstate,{type,payload})=>
{  switch(type)
   {case ActionTypes.GET_DETAILS:
     return {product:payload}
     default:
          return state;
    }
}