//combine reducer is used to combine all the reducer functions and a key is given to it
import {combineReducers} from 'redux'
import{productReducer,selected,setproductError,getpro,getDetails} from '../Reducers/product-reducer'

const reducers=combineReducers({
    allProduct:productReducer,
    selectedproduct:selected,
    setproductError,
    getpro,
    getDetails
})
export default reducers