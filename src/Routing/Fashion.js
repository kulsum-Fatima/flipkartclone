import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
const FashionFunc=()=>{
    const[taskList,setTaskList]=useState();
    const Fashion=()=>{
        Axios.get("https://dummyjson.com/products/category/fashion")
        .then((res)=>{setTaskList(res.data.products)
         console.log('here,', res.data)
        })
        .catch((err)=>(JSON.stringify(err.res.data)))
    }
    useEffect(()=>{
        Fashion()
    },[])
    return(
        <>
        <div>
        <TaskList taskList={taskList} />
        </div>
        </>
    )
};
export default FashionFunc;