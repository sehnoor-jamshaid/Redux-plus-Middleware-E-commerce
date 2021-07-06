/*making an api call and dispatching the data in actions from where the data would be saved in payload and the reducer will take in 
the data on the basis of the type and return a new state then which can be used all over in the application
 */
import react, { useEffect } from 'react'
import axios from 'axios'
import {getproducts} from '../Redux/Actions/product-actions'
import { useDispatch, useSelector } from 'react-redux'
import ProductCollection from './ProductCollection'
const ProductListing=()=>
{
 const dispatch=useDispatch()   
//     const fetchProducts= async()=>
//     {
//         const res =await axios.get("https://fakestoreapi.com/products").catch(e=>
//             {
//                 console.log("error",e)
//             })
//             console.log("res",res.data)
//             dispatch(setproducts(res.data))
//     }
//   console.log(products) 
  useEffect(()=>
  {
      dispatch(getproducts())
  },[]) 
    return(
    <div>
      
       <ProductCollection/>
    </div>
)

}
export default ProductListing