import React ,{createContext,useState} from "react";

import cam from "../assets/cam.jpg";
import ecouteur from "../assets/ecouteur.jpg";
import headphone from "../assets/headphone.jpg";
import iphone from "../assets/iphone.jpg";
import iphone11 from "../assets/iphone11.jpg";
import mic from "../assets/mic.jpg";
import pc from "../assets/pc.jpg";
import tablette from "../assets/tablette.jpg";



export const ProductContext =createContext();
const ProductContextProvider = (props) => {
    const [products]=useState([
      {id:1,name:'Camera',price:300,image:cam},  
      {id:2,name:'Earphone',price:40,image:ecouteur}, 
      {id:3,name:'Headphones',price:85,image:headphone}, 
      {id:4,name:'iphone7',price:900,image:iphone}, 
      {id:5,name:'iphone11',price:3500,image:iphone11}, 
      {id:6,name:'Microphone',price:130,image:mic}, 
      {id:7,name:'PC dell',price:2100,image:pc}, 
      {id:8,name:'Tablet',price:658,image:tablette},
    ]);
    return(
       < ProductContext.Provider value={{products:[...products]}}>
         {props.children}
       </ProductContext.Provider>

    )
}
export default ProductContextProvider;