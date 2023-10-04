import { Button, CardMedia } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";
import { manipulateCart } from "../Redux/Action/cart-Action";
import { ADD_ITEM } from "../Redux/Constant/cart-constants";
import "./ProductDetails.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

// import AddToCart from "./AddToCart";
// import AddToCart from "./CartFile";



const ProductDetails = () => {
   
  const location = useLocation();
  const detail = location.state.images;
  const [hover, setHover] = useState("");
  const Navigate = useNavigate();
 
 const dispatch= useDispatch();
 const cartItems = useSelector((state)=> state.reducer.cartItem)
  const handleAddToCart=()=>{
    if(isItemAvailable()){ 
      Navigate("/cart")
      return
    }else{
      dispatch(manipulateCart(ADD_ITEM,{qty:1,...location.state}))
    }
  } 



  const isItemAvailable = () => {
    return  cartItems.find((item)=> item.id=== location.state.id)
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className="details">
        <div className="details-img">
          <img
            className="details-img1"
            src={hover === "" ? location.state.thumbnail : hover}
          />
          <div style={{ display: "flex", flexWrap:"wrap", flexDirection: "row" }}>
            {detail.map((item, index) => {
              return (
                <div style={{ padding: "10px 10px 20px 10px" }}>
                  <CardMedia
                    style={{ width: "80px", height: "60px" }}
                    component="img"
                    height="10"
                    key={index}
                    image={item}
                    onMouseOver={() => setHover(item)}
                  //   onMouseOut={() => setHover("")}
                    alt="image"
                  />
                </div>
              );
            })}
            
          </div>
          <div className="details-button">
            <Button  variant="contained" style={{backgroundColor:"#FF9F00",height:"50px", width:"170px"}} className="details-but1" onClick={handleAddToCart}> 
              <ShoppingCartIcon/>{isItemAvailable()?"go to cart":"add to cart"}
            </Button>
            <Button variant="contained" className="details-but2" style={{backgroundColor:"#FB641B",margin:"10px",height:"50px", width:"170px"}}>
              <BoltIcon/>BUY NOW
            </Button>
          </div>
        </div>
        <div className="details-item" style={{marginTop:"50px",justifyContent:"center" }}>

          {/* <p>{location.state.description}</p> */}

          <div>
          <h4 className="details-item1" style={{color:"blue"}}>Model: {location.state.title}</h4>
          <h4 className="details-item1"> brand: {location.state.brand}</h4>
          <h4 className="details-item1">category: {location.state.category}</h4>
          <h4 className="details-item1">discountPercentage: {`Up to${location.state.discountPercentage}% off`}</h4>
          {/* <p>{location.state.description}</p> */}
          
          <h4 className="details-item1"><CurrencyRupeeIcon style={{color:"blue"}}/> {`${location.state.price}`}</h4>
          
          <h6 className="details-item1 rating" style={{backgroundColor:"green",width:"100px",height:"25px",borderRadius:"10px",marginLeft:"150px"}}>
         {location.state.rating}<StarBorderIcon style={{color:"white"}}/></h6>
         </div>
          

        </div>
        <div style={{marginTop:"50px"}}>
          <h5>Available offers</h5>
          <h5>899</h5>
          <p><LocalOfferIcon style={{color:"green"}}/><b>Bank Offer</b>5% Cashback on Flipkart Axis Bank CardT&C </p>
          <p><LocalOfferIcon style={{color:"green"}}/><b>Partner Offer </b> Sign up for Flipkart Pay Later and get<br/> Flipkart Gift Card worth up to ₹500*</p>
          <p><LocalOfferIcon style={{color:"green"}}/><b>Special Price </b>Get extra ₹1000 off<br/> (price inclusive of cashback/coupon)T&C</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
