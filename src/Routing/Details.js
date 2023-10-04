import React from "react";
import { CardMedia } from "@mui/material";
import {useLocation} from "react-router-dom";


const Details=()=>{
    const Location=useLocation()
    return(
        
        <div>
         <h2>Details-{JSON.stringify(Location)}</h2>
         
         <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={Location.state.image}
      />
      
        </div>
        

    )
};
export default Details;