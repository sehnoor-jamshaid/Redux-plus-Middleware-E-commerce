import { switchMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import axios from 'axios'

import {singlepro,setproductsError, removeproduct} from '../Actions/product-actions'
// import { generalizedEpic } from '../generalizedEpic'
import {ActionTypes} from '../Constants/action-types'


export class productDetailsEpic {
    static productDetails = action$ =>
        action$.pipe(
            ofType(ActionTypes.GET_DETAILS),
            switchMap(async({payload:id} ) => {
                console.log(id,"id in epic")
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(e => {
                    console.log("error", e)
                })
                console.log("res", res.data)
                
                if (res.status == 200)
                 {
                    
                    return singlepro(res.data)
                    
                }else
                {
                   
                    return setproductsError(res.errorMessage)
                }
                
            }
            )
            

        )
}






