import Axios from "axios";
import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
const Electronics=()=>{
    const[taskList,setTasklist]=useState();
    const electric=()=>{
        Axios.get("https://dummyjson.com/products/category/lighting")
        .then((res)=>{setTasklist(res.data.products)})
        .catch((err)=>(err.res.data))
    }
    useEffect(()=>{
        electric()
    },[])
    return(
       <>
       <div>
       <TaskList taskList={taskList} />
       </div>
       
       </>

    )
};
export default Electronics;