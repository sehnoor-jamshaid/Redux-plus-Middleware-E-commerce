import react from 'react'
import { useSelector } from 'react-redux'
const Header=()=>
{const products=useSelector((state)=>state)
  console.log(products)  
    return(
    <div>
        <h1>Header</h1>
    </div>
)

}
export default Header