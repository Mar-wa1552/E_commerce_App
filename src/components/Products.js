import React,{useContext} from "react";
import { ProductContext } from "../Global/ProductsContext";
import { CartContext } from "../Global/CartContext";
import Banner from './bannière';
const Products = () =>{
    const {products}=useContext(ProductContext);
    const {dispatch}=useContext(CartContext)
    
    return(
      <div className="container">
        <Banner/>
        <div className="products">
           {products.map((product) => (
             
               <div className="product" key={product.id}>
                 <div className="product_image">
                   <img src={product.image} alt="not found" />

                 </div>
                 <div className="product-details">
                   <div className="product_name">
                     {product.name}
                   </div>
                   <div className="product_price">
                     {product.price}dt
                   </div>
                 </div>
                 <div className="add_cart" onClick={() => dispatch({
                   type:'ADD_TO_CART' ,id:product.id,product 
                 })}>
                   Add to cart
                 </div>
               </div>
             
           )
        )} 
        </div>
        </div>
        
    )
}
export default Products;