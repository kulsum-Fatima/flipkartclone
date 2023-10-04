import Axios from "axios";
import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
const ToysFunc=()=>{
    const[taskList,setTasklist]=useState();
     const ToysSes=()=>{
        Axios.get("https://dummyjson.com/products/category/sunglasses")
        .then((res)=>{setTasklist([...res.data.products])
        console.log(res.data)})
        .catch((err)=>(JSON.stringify(err.res.data)))
     }
     useEffect(()=>{
        ToysSes()
    },[])
    return(
        <>
        <div>
        <TaskList taskList={taskList} />
        </div>
        </>
    )
};
export default ToysFunc;