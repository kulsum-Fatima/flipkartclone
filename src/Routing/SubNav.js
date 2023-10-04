import { CardActionArea, CardContent, CardMedia, Typography, Button, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
 
import TaskList from "./TaskList";
import TaskListFunc from "./CardOne";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import CarousalNew from "./CarousalNew";
const SubNav = () => {
  const [data, setData] = useState([]);
  const [taskList, setTasklist] = useState([]);
 
  const Navigate = useNavigate();

  // useEffect(() => {
  //   getData()
  // }, [])
   const HomeFunc=()=>{
    // Axios.get("https://dummyjson.com/products")
    Axios.get("https://dummyjson.com/products?limit=100")
    .then((res)=>{setTasklist(res.data.products)
    console.log(res.data.products)})
    .catch((err)=>alert(JSON.stringify(err.res.data)))
   }
   useEffect(()=>{
    HomeFunc()
   },[])

  const Grocery = () => {
    Axios.get("https://dummyjson.com/products/categories/groceries")
      .then((res) => {
        setData(res.data);

        console.log('Here , ', res.data.products)
        setTasklist([...res.data.products])
      })
      .catch((err) => alert(JSON.stringify(err.res.data)))
    console.log(data)
  }
  
  const getData = () => {
     Axios.get("https:dummyjson.com/products/category/smartphones")
    // Axios.get("https:dummyjson.com/products/category/smartphones")
        //  Axios.get("https:fakestoreapi.com/products")
         .then((res)=>{setData(res.data);

           console.log('Here , ', res.data)
         setTasklist(()=> [...res.data])
       })
       .catch((err)=>alert(JSON.stringify(err.res.data)))
       console.log(data)

       fetch('https:dummyjson.com/products')
      .then((res) => {
        setData(res.data);

        console.log('Here , ', res.data)
         setTasklist(()=> [...res.data])
      })
      .then(console.log);
  }

   
  const ProDuct = () => {
    Axios.get("https://dummyjson.com/products/category/home-decoration")
      .then((res) => {
        setTasklist(res.data.products);
        
         console.log('here,',res.data.products)
      })
     .catch((err)=>(JSON.stringify(err.res.data)))
  }

  const Beauty=()=>{
    Axios.get("https://dummyjson.com/products/category/skincare")
    .then((res)=>{setTasklist([...res.data.products])
    console.log('here,',res.data.products)})
    .catch((err)=>(JSON.stringify(err.res.data)))
}
// useEffect(()=>{
//     Beauty()
// },[])
const furniture=()=>{
  Axios.get("https://dummyjson.com/products/category/furniture")
  .then((res)=>{setTasklist([...res.data.products])
  console.log('here,',res.data)})
  .catch((err)=>(JSON.stringify(err.res.data)))
}

  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", textAlign: "center" }}>

          <div style={{ margin: "10px 20px" }}>
            <Card sx={{ maxWidth: 100, paddingTop: "10px 0px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="70px"

                  image="https:rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"

                  alt="green iguana"
                />
                {/* <CardContent> */}

                <Button onClick={() => { ProDuct () }}>appliances</Button>
                {/* </CardContent> */}
              </CardActionArea>
              {/* <Button size="small" color="primary">
              Buy
            </Button> */}

            </Card>
          </div>
          {/* <div>
            <TaskListFunc/>
            </div> */}

          <div style={{ margin: "10px 20px" }}>
            <Card sx={{ maxWidth: 100, paddingTop: "10px 0px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                    height="70px" 
                  image="https://m.media-amazon.com/images/I/51lIbavjJFL._SY450_.jpg"
                  alt="green iguana"
                />
            

                  <Button onClick={() => { Navigate("/Watch")}}>watch</Button>
               
              </CardActionArea>
              {/* <Button size="small" color="primary">
              Buy
            </Button> */}

            </Card>
          </div>

          <div style={{ margin: "10px 20px" }}>
            <Card sx={{ maxWidth: 100, paddingTop: "10px 0px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="70px"
                     
                  image="https:rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                  alt="green iguana"
                />
                {/* <CardContent> */}




                <Button onClick={() => {Navigate("/toys")}}>toys</Button>
                {/* </CardContent> */}
              </CardActionArea>
              {/* <Button size="small" color="primary">
              Buy
            </Button> */}


            </Card>
          </div>



          <div style={{ margin: "10px 20px" }}>
            <Card sx={{ maxWidth: 100, paddingTop: "10px,0px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="70px"
                     
                   image="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47874cd4acbfaf20.png?q=100"
                   
                  
                  alt="green iguana"
                />
                {/* <CardContent> */}

                <Button onClick={() => {furniture() }}>Home</Button>
                {/* </CardContent> */}
              </CardActionArea>
              {/* <Button size="small" color="primary">
              Buy
            </Button> */}

            </Card>
          </div>


          <div style={{ margin: "10px 20px" }}>
            <Card sx={{ maxWidth: 100, paddingTop: "10px,0px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="70px"
                  image="https:www.thechennaimobiles.com/image/cache/catalog/130972-600x600.jpg"
                  
                  alt="green iguana"
                />
                {/* <CardContent> */}

                <Button onClick={() => { getData();Navigate("/Mobile")  }}>mobile</Button>
                {/* </CardContent> */}
              </CardActionArea>
              {/* <Button size="small" color="primary">
              Buy
            </Button> */}

            </Card>
          </div>



          <div style={{ margin: "10px 20px" }}>
            <Card sx={{ maxWidth: 100, paddingTop: "10px,0px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="70px"
                     
                  image="https:www.pngall.com/wp-content/uploads/4/Grocery-PNG-Free-Download.png"
                  alt="green iguana"
                />
                {/* <CardContent> */}

                <Button onClick={() => {Navigate("/Grocery") }}>Grocery</Button>
                {/* </CardContent> */}
              </CardActionArea>
              {/* <Button size="small" color="primary">
              Buy
            </Button> */}

            </Card>
          </div>
          {/* {taskList.map((data,index)=> */}
          {/* (setTasklist(data.index)) */}
          {/*  console.log("this is list") */}
          {/* )} */}


          <div style={{ margin: "10px 20px" }}>
            <Card sx={{ maxWidth: 100, paddingTop: "10px 0px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="70px"
                     
                  image="https:rukminim1.flixcart.com/fk-p-flap/128/128/image/a84e58e11c8b10b6.png?q=100"
                  alt="green iguana"
                />
                {/* <CardContent> */}

                <Button onClick={() => {Beauty()}}>beauty</Button>
                {/* </CardContent> */}
              </CardActionArea>
              {/* <Button size="small" color="primary">
              Buy
            </Button> */}

            </Card>
          </div>

          <div style={{ margin: "10px 20px" }}>
            <Card sx={{
              maxWidth: 345, paddingTop: "10px 0px", justifyContent: "center", display: "flex"
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={"70px"}

                  image="https:rukminim1.flixcart.com/fk-p-flap/128/128/image/f8928124c04bc6e9.png?q=100"
                  alt="green iguana"
                />
                {/* <CardContent> */}

                <Button onClick={() => { Navigate("/electric") }}>electronics</Button>
                {/* </CardContent> */}
              </CardActionArea>
              {/* <Button size="small" color="primary">
              Buy
            </Button> */}

            </Card>
          </div>

          <div style={{ margin: "10px 20px" }}>
            <Card sx={{ maxWidth: 100, paddingTop: "10px 0px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                     height="70"
                   image="https:us.123rf.com/450wm/johny007pan/johny007pan1207/johny007pan120700076/14437685-blue-lcd-tv-monitor-isolated-on-white-background.jpg?ver=6"
                  alt="green iguana"
                />
                {/* <CardContent> */}
                {/* <div> */}

                <Button onClick={() => { getData() }}>fashion</Button>
                {/* <Button>electronics</Button> */}
                {/* </div> */}

                {/* </CardContent> */}
              </CardActionArea>
              {/* <Button size="small" color="primary">
              Buy
            </Button> */}

            </Card>
          </div>

          <div style={{ margin: "10px 20px" }}>
            <Card sx={{ maxWidth: 100, paddingTop: "10px 0px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="70px"
                     
                  image="https:rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
                  alt="green iguana"
                />
                {/* <CardContent> */}

                <Button onClick={() => { getData() }}>2_wheelers</Button>
                {/* </CardContent> */}
              </CardActionArea>
              {/* <Button size="small" color="primary">
              Buy
            </Button> */}

            </Card>
          </div>


        {/* </div> */}

        {/* <TaskListFunc travelList={travelList} setTravelList={setTravelList} /> */}
      </div> 
            </div >
            {/* <TaskList taskList={taskList} /> */}
        <CarousalNew />
        <TaskList taskList={taskList} />
</>
    )
};
export default SubNav; 