import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import  Axios  from "axios";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import MapFunc from "./MapFunc";
const CardOne=(
  // {travelList,setTravelList}
  )=>{
  const[data,setData]=useState();
  const[travelList,setTravelList]=useState([]);
  // const[taskList,setTasklist]=useState();
  const navigate =useNavigate();
  const ProDuct=()=>{
    Axios.get("https://dummyjson.com/products/category/smartphones")
    .then((res)=>{
      setData(res.data.products);
      // console.log(res)
      setTravelList(()=>[...res.data.products])
    navigate("/travel");
  })
    .catch((err)=>(JSON.stringify(err.res.data)))
  }
    return(
        <>
        <div>
          {/* <MapFunc travelList={travelList}/> */}
          <div  style={{display:"flex",justifyContent:"center",flexWrap:"wrap",textAlign:"center"}}>
         <div style={{margin:"10px 20px"}}>
            <Card sx={{ maxWidth: 100, paddingTop:"10px 0px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="70px"
              //  height={"50px"}
              image="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
              
              alt="green iguana"
            /> 
            {/* <CardContent>  */}
              
                <Button onClick={()=>{ProDuct()}}>travel</Button> 
            {/* </CardContent>  */}
          </CardActionArea> 
          {/* <Button size="small" color="primary">
              Buy
            </Button> */}
          
        </Card> 
          </div>
          </div> 



        {/* <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", margin: "20px" }}>
          <div>
          {travelList?.map((data, index) =>   (
            
            <>
              <Card sx={{ marginTop: "30px", maxWidth: 345 }}
            //   onClick={()=>navigate(`detailsbyid/${data.id}/${data.title}/${data.price}`)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    // image={data.image}
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
          )}
          </div>
        </div> */}

        </div>
        </>
    )
};
export default CardOne;