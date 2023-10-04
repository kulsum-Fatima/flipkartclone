import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { manipulateCart } from "../Redux/Action/cart-Action";
import { REMOVE_ITEM } from "../Redux/Constant/cart-constants";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const CartFunc2=()=>{
    const[counter,setCounter]=useState(0);
    const Increase=()=>{
        setCounter(counter=>counter+1)
    }
    const Decrease=()=>{
        setCounter(counter=>counter-1)   
    }
    const Navigate=useNavigate();
    const cartItem= useSelector((state) => state.reducer.cartItem);
    const dispatch=useDispatch();
    const handleRemove=(id)=>{
        dispatch(manipulateCart(REMOVE_ITEM,id))
    }
    return(
        <>
        
        {/* <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",
        border:"2px solid black"}}> */}
    <div>
        {/* <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",border:"2px solid black"}}> */}
            <div style={{display:"flex",flexWrap:"wrap"}}>
        <Card sx={{marginTop:"50px",width:"900px",height:"60px",
        display:"flex",justifyContent:"space-around",alignItems:"center",flexwrap:"wrap"}}>
        
        <h6>
         Flipkart
        </h6>
        <h6>
       Grocery
        </h6>
        
    </Card>
    </div>
        {/* </div> */}

        <div style={{display:"flex",flexWrap:"wrap"}}>
        <Card style={{marginTop:"10px",width:"900px",height:"60px",
        display:"flex",justifyContent:"space-around",alignItems:"center",flexwrap:"wrap"}}>
        
        <h6>
         from saved addresses
        </h6>
        <h6>
       enter delivery pincode
        </h6>
        
    </Card>

        </div>

    <div style={{display:"flex",flexWrap:"wrap"}}>
    {cartItem.map((item,index)=>(
        <Card style={{marginTop:"50px",width:"900px"}}>
        <div style={{display:"flex",justifyContent:"space-around",flexwrap:"wrap"}}>
                {/* {cartItem.map((item,index)=>( */}
               <>
               <div>
                <img style={{height:"100px",width:"150px"}} src={item.thumbnail}/>
                <div style={{display:"flex",justifyContent:"center",margin:"10px"}}>
                <div style={{border:"0.2px solid grey",width:"100px",}}>
              <AddCircleIcon style={{color:"grey", fontSize:"35px"}} onClick={Increase}/> {counter} <RemoveCircleIcon style={{color:"grey",fontSize:"35px"}} onClick={Decrease}/>
              </div>
              </div>
               </div>
               <div style={{}}>
             
                <p>
                <b style={{color:"grey"}}>brand</b>: <b style={{fontSize:"20px",color:"blue"}}>{item.brand}</b>

                </p>
            <p>title:{item.title}</p>
            <p> rating:{item.rating}</p>
            <Button onClick={()=> handleRemove(item.id)}>remove</Button>
             </div>
             <div>
                <p>Delivery by on date:</p>
               </div>
               </>

                {/* ))} */}
            </div>


    </Card>
  ))}
    </div>
    </div>

    <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
    <Card style={{marginTop:"50px",width:"400px",height:"200px",
    display:"flex"}}>
        <div>
        <div style={{display:"flex", justifyContent:"flex-start",marginTop:"10px"}}>
        <h6 style={{color:"GrayText",marginLeft:"10px"}}>
         PRICE DETAILS
        </h6>
        </div>
        <div>
        <hr style={{width:"400px"}}></hr>
        </div>
        <div style={{display:"flex", justifyContent:"flex-start",marginLeft:"10px"}}>
        <h6>price</h6>
        </div>
        <h6 style={{display:"flex", justifyContent:"flex-start",marginLeft:"10px"}}>discount</h6>
            </div>
    </Card>
   
    </div>


        {/* </div> */}
        
        </>
    )
}
export default CartFunc2;