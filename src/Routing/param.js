import React from "react";
import { useParams } from "react-router-dom";
const DetailsByparams=()=>{
    const Param=useParams()
    return(
    <>
    <div>
<h2>DetailsByparams-{JSON.stringify(Param)}</h2>

    </div>
    
    </>


    )
};
export default DetailsByparams;