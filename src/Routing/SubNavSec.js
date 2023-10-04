import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import Axios  from "axios";
import React, { useState } from "react";


const SubNavSec=()=>{
    const [data,setData]=useState();
    // const[taskList, setTasklist]=useState();

    const Product=()=>{
        axios.get('https://dummyjson.com/products')
        .then((res)=>{
          console.log(res.data.products)
          setData(res.data.products)
        })
        
    }
    return(
        <>
        <div>
            <div style={{display:"flex",justifyContent:"center",textAlign:"center",alignItems:"center"}}>
                <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80"
          image="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/9bb3499c8248d2ba.png?q=100"
          alt="green iguana"
        />
      </CardActionArea>
       <Button onClick={()=>{Product()}} >Mobile</Button>
       {/* <Button color="inherit" >travel</Button>  */}
    </Card>
    </div>
    </div>
     <div>
        {data?.map((data,index)=>(
            <>
             
              <Card  sx={{ marginTop: "30px", maxWidth: 345 }}>
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
        ))}
    </div> 
        </div>
        </>
    )
};
export default SubNavSec;