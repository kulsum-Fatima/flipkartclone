import { CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const MapFunc=({travelList})=>{
    const Location=useLocation()

    return(
        <>
        <div>
          
          <Button variant="outlined">Login</Button>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", margin: "20px" }}>
          <div>
          {travelList?.map((data, index) =>   (
            
            <>
            
              <Card sx={{ marginTop: "30px", maxWidth: 345 }}
            //   onClick={()=>navigate(`detailsbyid/${data.id}/${data.title}/${data.price}`)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    // image={data.image}
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
                <CardActions style={{justifyContent:"center"}}>
                  {data.price}
                </CardActions>
              </Card>
            </>
          )
          )}
          </div>
        </div>

        </div>
        </>
    )
};
export default MapFunc;