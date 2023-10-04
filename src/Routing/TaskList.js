import React from "react";
import { CardActionArea, CardContent, CardMedia, Typography, Button, Card, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { Button, Card } from "react-bootstrap";

const TaskList = ({ taskList }) => {
  // const Navigate=useNavigate();

  const navigate = useNavigate();
  return (
    <div>
      {/* <div className="imgContainer">
           {taskList?.map((data,ind)=>(
              
              <>
            <Card key={ind} 
            sx={{ maxWidth: 345, marginTop: 6 }}
            onClick={()=>Navigate(`/DetailbyId/${data.id}`,{state:data})}
            className="cardCss"
            >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={data.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Typography gutterBottom variant="h5" component="div">
                  {data.price}
                </Typography>
                
              </Card>
              </>
            ))}
           </div>  */}

      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", margin: "20px" }}>
        {taskList?.map((data, index) => (

          <>
            <Card sx={{ marginTop: "30px", maxWidth: 345 }}
              // onClick={() => navigate(`detailsbyid/${data.id}/${data.title}`)}
              onClick={()=>{navigate("/ProductDetails",{state:data})}}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  key={index}
                  image={data.thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: "center" }}>
                {data.price}
              </CardActions>
            </Card>
          </>
        )
        )}
      </div>
    </div>
  )
};

export default TaskList;