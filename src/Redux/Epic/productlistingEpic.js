import { switchMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import axios from 'axios'

import {setproducts,setproductsError} from '../Actions/product-actions'
// import { generalizedEpic } from '../generalizedEpic'
import {ActionTypes} from '../Constants/action-types'


export class productlistingEpic {
    static productlist = action$ =>
        action$.pipe(
            ofType(ActionTypes.GET_PRODUCTS),
            switchMap(async() => {
                const res = await axios.get("https://fakestoreapi.com/products").catch(e => {
                    console.log("error", e)
                })
                console.log("res", res.data)
                
                if (res.status == 200)
                 {
                    
                    return setproducts(res.data)
                }else
                {
                   
                    return setproductsError(res.errorMessage)
                }
                
            }
            )
            

        )
}






