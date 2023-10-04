import Axios from "axios";
import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
const GroceryComponent=(props)=>{
    const [data, setData] = useState([]);
    const[taskList,setTasklist]=useState()
    const Grocery = () => {
        Axios.get("https://dummyjson.com/products/category/groceries")
          .then((res) => {
            console.log('Here , ', res.data.products)
            setTasklist([...res.data.products])
          })
          .catch((err) => alert(JSON.stringify(err.res.data),
          console.log(err.res.data)))
        
      }
      useEffect(()=>{
        Grocery()
    },[])
    return(
        <>
        <div>
        <TaskList taskList={taskList} />
        </div>
        </>
    )
};
export default GroceryComponent;