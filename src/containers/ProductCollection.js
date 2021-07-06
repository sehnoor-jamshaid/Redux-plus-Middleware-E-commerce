/*here we are taking out data from the store using hook use selector we can get all the products which are in reducer and stored in 
the store.
Link is added so taht when we click on div the particular product will get displayed */

import react from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import'../file.css'
import { Link } from 'react-router-dom'
const ProductCollection = () => {
    const products = useSelector((state) => state.allProduct.product)
    const dispatch=useDispatch()

    console.log(products)
    const renderlist= products.map((pro) => {
        const {id,title,category,price,image}=pro;
        
    return (
        
        <div className="col-md-3 d-flex justify-content-around mt-3">
            <Link to={`products/${id}`} >
            <div className="card procol" >
                <img className="card-img-top " src={image} alt="Card image cap" style={{"height": "18vw"}}></img>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{category}</p>
                    <p className="card-text">$ {price}</p>
                    
                </div>
            </div>
            </Link>
            </div>
          
        )

    });
   
return<><div className="container-fluid"><div className="row"><div className="col-10 mx-auto"><div className="row ">{renderlist}</div></div></div></div></>
}
export default ProductCollection