
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Axios from "axios";
import { Image, InsertEmoticon } from "@mui/icons-material";
import CarousalNew from "../Routing/CarousalNew";
import SubNav from "./SubNav";
import TaskListFunc from "./CardOne";
import CardOne from "./CardOne";
import SubNavSec from "./SubNavSec";
import MobileFunc from "./ProductDetails";
import CategoryHeader from "./NavHeader";
import axios from "axios";
import TaskList from "./TaskList";
const HomePage=()=>{
    const[data,setData]=useState([]);
    const[taskList,setTasklist]=useState([]);
    const[selectCategory,setSelectCategory]=useState();
    const Navigate=useNavigate();

    const [carousalList, setCarousalList]=useState([
      'https://www.creatopy.com/blog/wp-content/uploads/2018/11/omega-responsive-image-slider-1024x566.png',
      'https://www.creatopy.com/blog/wp-content/uploads/2018/11/omega-responsive-image-slider-1024x566.png',
      'https://www.creatopy.com/blog/wp-content/uploads/2018/11/omega-responsive-image-slider-1024x566.png',
      'https://www.creatopy.com/blog/wp-content/uploads/2018/11/omega-responsive-image-slider-1024x566.png'
    ])
    
    // const Product=()=>{
      //  Axios.get("https://dummyjson.com/products/search?q=Laptop")
      // Axios.get("https://dummyjson.com/products/category/smartphones")
      //  .then((res)=>{setData(res.data);console.log(res.data);
        // setTasklist(()=> [...res.data])})
      //  .catch((err)=> alert(JSON.stringify(err.res.data)))
    // }
  //  useEffect(()=>{
  //   product();
  //  },[])
    useEffect(()=>{ 
      GetData()
    },[selectCategory])   

     const GetData=()=>{
      axios.get(
        !selectCategory
        ?"https://dummyjson.com/products?limit=100"
        :`https://dummyjson.com/products/category/${selectCategory}`
      )
      .then((res)=>{setData(res.data.products)
      console.log(res.data)})
      .catch((err)=>{console.log(err)})
     }

    
    return(
    <>
    <div>
      {/* <SubNav/> */}
     <CategoryHeader setSelectCategory={setSelectCategory} />
      {/* <SubNavSec/> */}
      {/* <div style={{display:"flex",justifyContent:"center"}}>
      <CardOne/>  */}
      {/* <TaskListFunc/>  */}
      {/* </div> */}
      
         
        {/* {taskList.map((data,index)=>
            (setTasklist(data.index)) 
             console.log("this is list") 
        )} */}



        
        
        
        {/* <Button onClick={()=>{Product()}}>click it</Button> */}
        {/* <div>
    {carousalList.map((item,index)=> (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">

<div class="carousel-item">
<img src={item} class="d-block w-100" alt="..."/>
</div>
  </div>
</div>

    ))}
    
   
        </div> */}


<div  style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", margin: "20px" }}>
          {data.map((data, index) =>  
           (
           
            <>
              <Card sx={{ marginTop: "30px", maxWidth: 345 }}
               onClick={()=>Navigate("/ProductDetails",{state:data})}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={data.thumbnail}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{justifyContent:"center"}}>
                  {data.price}
                </CardActions>
              </Card>
            </>
          
          )
          )};
          
        </div>
        

    <h1>This is Home page!!!</h1>
    <div class="card">
  <div class="card-header" style={{display:"flex",justifyContent:"space-around"}}>
   <div><a href="#">ABOUT</a></div>
   <div><a href="#">HELP </a></div>
   <div><a href="#">POLICY</a></div>
   <div><a href="#">SOCIAL</a></div>
  </div>
  <div class="card-body">
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <ol>
        <li>ContactUs</li>
        <li>About Us</li>
        <li>Careers</li>
      </ol>
      <ol>
        <li>Payments</li>
        <li>Cancelation</li>
      </ol>
      <ol>
        <li>Security</li>
        <li>Privacy</li>
      </ol>
      <ol>
        <li>Facebook</li>
        <li>Twitter</li>
      </ol>
      </div>
    
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

        

    {/* <Outlet/> */}
    
    </div>
    
    </>

    )
};
export default HomePage;