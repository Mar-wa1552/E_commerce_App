import axios from 'axios';
import React,{useContext} from 'react';
import { CartContext } from '../Global/CartContext';
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const Cart= (props) =>{
    const {shoppingCart,totalPrice,qty,dispatch}=useContext(CartContext);
    const handelToken= async (token) =>
    {   const product={name:'All products' , price:totalPrice}
        const response= await axios.post("http://localhost:8081/checkout",{
               product,
               token
        });
        const{status}=response.data;
        if(status==="success"){
            dispatch({type:'EMPTY'});
            props.history.push('/');
            toast.success("you have paid successfly now you can continoue your shopping",{position:toast.POSITION.TOP_RIGHT});
        }
 
 }
    console.log(shoppingCart);
    return(
        <div className="cart_container">
            <div className="cart_details" style={{marginTop:'100px'}}>
               { shoppingCart.length>0 ?
               shoppingCart.map(cart=> (
                 <div className="cart" key={cart.id}>
                     <span className="cart-image"><img src={cart.image} alt="notfound"/>  </span>
                     <span className="cart-product-name">   {cart.name}</span>
                     <span className="cart-product-price">{cart.price} dt</span>

                 <span className="inc" onClick={() => dispatch({
                   type:'INC' ,id:cart.id,cart
                 })}><i className="fas fa-plus"></i></span>
                     <span className="product-quantity">{cart.qty}</span>
                     <span className="dec" onClick={() => dispatch({
                   type:'DEC' ,id:cart.id,cart
                 })}><i className="fas fa-minus"></i></span>
                     <span className="product-total-price">{cart.price*cart.qty} dt</span>
                     <span className="delete_product"  onClick={() => dispatch({
                   type:'DEL' ,id:cart.id,cart
                 })}><i className="fas fa-trash-alt"></i></span>
                     

                     </div>

               ) )
               :'Sorry your cart is currently empty'

               }
            </div>
            {shoppingCart.length >0 ? 
            <div className="cart-summary">
                <div className="summary">
                    <h3>Cart Summary</h3>
                    <div className="total-items">
                        <div className="items">Total Items</div>
                        <div className="items-count">{qty}</div>

                    </div>
                    <div className="total-price-section">
                        <div className="just-title">Total price</div>
                        <div className="items-price">{totalPrice} dt</div>

                    </div>
                       <div className="strip-section">
                          <StripeCheckout
                             stripeKey="pk_test_51K44fmFqw0Pp2jvsGHreDVoIQ6oX9SHZ11902UJxYfhOdDtU3XB1bCbL38cKbf4B7EbOZQDGhd8ty2xzRibOMgVq00oebQvlsq" 
                             token={handelToken}
                             billingAddress
                             shippingAdress
                             amount={totalPrice*100}
                             name="All products"
                             >
                              </StripeCheckout>    
                           </div>            
                </div>
              </div>  
       : '' }

        </div>
    )
}
export default Cart;