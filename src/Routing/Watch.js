import Axios from "axios";
import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
const WatchFunc=()=>{
    const [taskList,setTasklist]=useState();
    const Watch=()=>{
        Axios.get("https://dummyjson.com/products/category/mens-watches")
        .then((res)=>{setTasklist(res.data.products)})
        .catch((err)=>(JSON.stringify(err.res.products)))
    }
    useEffect(()=>{
        Watch()
    },[])
    return(
        <>
        <div>
        <TaskList taskList={taskList} />
        </div>
        </>
    )
};
export default WatchFunc;