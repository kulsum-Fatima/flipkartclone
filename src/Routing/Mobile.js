import React, { useEffect, useState } from 'react'
import TaskList from './TaskList';
import Axios from 'axios';



const Mobile = (props)=>{
    const[taskList,setTasklist]=useState()

    const getData = () => {
        Axios.get("https://dummyjson.com/products/category/smartphones")
          .then((res) => {
  
            console.log('Here , ', res.data.products)
            setTasklist([...res.data.products])
          })
          .catch((err) => alert(JSON.stringify(err.res.data)))
      }

      useEffect(()=>{
        getData()
    },[])
    return(
        <>
        <div>
        <TaskList taskList={taskList} />
            
        </div>
        
        </>
    )
}

export default Mobile;