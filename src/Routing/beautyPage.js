import Axios from "axios";
import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
const BeautyPage=()=>{
    const[taskList,setTasklist]=useState();
    const Beauty=()=>{
        Axios.get("https://dummyjson.com/products/category/skincare")
        .then((res)=>{setTasklist([...res.data.products])
        console.log('here,',res.data.products)})
        .catch((err)=>(JSON.stringify(err.res.data)))
    }
    useEffect(()=>{
        Beauty()
    },[])
    return(
        <>
        <div>
        <TaskList taskList={taskList} />
        </div>

        </>
    )
};
export default BeautyPage;