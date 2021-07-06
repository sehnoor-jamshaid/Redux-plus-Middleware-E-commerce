/*an api is called to fetch the selected product for this we need an id oftheproduct to be called so we are using hooks called use params
from the route where the dynamic parameter is defined and we are using that parameter and engraving it in our api call so particular data 
is been shown and if the productid is not equal to null then only product will be shown after that remove product action is called which will
return the state as empty
 */
import react, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { removeproduct, getDetails } from '../Redux/Actions/product-actions'
import { useParams } from 'react-router'
const ProductDetails = () => {
    const products = useSelector((state) => state.selectedproduct.product)
    const { title, category, price, image, description } = products

    const dispatch = useDispatch()
    const { id } = useParams()
    console.log("id product", id)

    // const soloProduct=async ()=>
    // {
    //     const solpro=await axios.get(`https://fakestoreapi.com/products/${id}`).catch((e)=>
    //     {
    //         console.log(e)
    //     })
    //     dispatch(singlepro(solpro.data))
    //     console.log("solpro dataa",solpro.data)
    // }
    // console.log("checking data",)
    useEffect(() => {
        console.log("id product", id)

        dispatch(getDetails(id))
        console.log("event dispatched")
        //    return()=>
        //    {
        //      setTimeout( dispatch(removeproduct()),8000)  
        //    }
    }, [id])
    console.log(products)
    return (
        <div>
            {Object.keys(products).length === 0 ?
                (<div>...Loading</div>) :
                (<div className="container-fluid mt-5" >
                    <div className="row ">
                        <div className="col-10 mx-auto" >
                            <div className="row " >
                                <div className="col-4">
                                    <div className="card " >
                                        <img className="card-img-top " src={image} alt="Card image cap" style={{ "height": "30vw", "width": "100%" }}></img>
                                    </div>
                                </div>
                                <div className="col-4" style={{ "text-align": "left","border":"1px solid #D5E5F7","max-height":"30vw" }}>
                                    <h6 style={{ "text-transform": "uppercase" }} className="mt-2">{title}</h6>
                                    <hr></hr>
                                    <h6 style={{ "text-transform": "uppercase" }}>{category}</h6>
                                    <p>$ {price}</p>
                                    <h6>Description</h6>
                                    <p style={{ "font-size": "12px" }}>{description}</p>
                                    <button style={{ "font-size": "12px", "padding": "10px 20px", "background-color": "#0c7463", "color": "white", "border-radius": "3px" }}>ADD TO CART</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                )}



        </div>
    )

}
export default ProductDetails



