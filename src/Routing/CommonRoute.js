import React from "react";
import { Navigate } from "react-router-dom";
const CommonRoute=({Children})=>{
    return(
        <>
        {!localStorage.getItem("token")? Children:<Navigate to={"/"}/>} 
        </>
    )
};
export default CommonRoute;