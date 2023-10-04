import axios from "axios";
import React, { useEffect, useState } from "react";
const CategoryWiseProduct=()=>{
   const[image,setImage]=useState([]);
   console.log(image,`image-product`);
    
   useEffect(()=>{
    Mobile()
   },[])

   const Mobile=()=>{
    axios.get("https://dummyjson.com/products/category/smartphones")
    .then((res)=>{setImage(res.data.products);
    console.log(res.data)})
    .catch((err)=>{console.log("err:",err)})
   }

    return(
        <>
        <div>
         {image.map((data,index)=>{
            return(
             <>
             <div key={data.id}>
             <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
   
    </Card>

             </div>
             </>

            )
         })}
        </div>
        </>
    )
};
export default CategoryWiseProduct;