import { AppBar, Box, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { Image } from 'react-bootstrap';
import Badge, { BadgeProps } from '@mui/material/Badge';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';


// import { Image } from '@mui/icons-material';
// import { NavLink } from 'react-router-dom';

// import HomePage from './home';
const NavBar=()=>{
  const Navigate=useNavigate()
  const NavStyle={
    // padding:"5px 5px",
    
    backgroundColor:"white",
    width:"500px",
    // height:"40px"
    
  }
  const count=useSelector((state)=>state.reducer.cartItem.length)
    return(
        <>
        <div>
  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            <MenuIcon/>
          </IconButton>
          {/* <input type={"text"} placeholder="search for products brand and more" className="inputfeild"/> */}
          <div>
          <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" 
          height={"20px"} alt="flipkart"/><br/>
          <a style={{color:"white",fontStyle:"italic",textDecoration:"none",fontSize:"15px",cursor:"pointer"}}
           onClick={()=>Navigate("/")}>Explore
          <span style={{color:"yellow",fontStyle:"italic",fontSize:"15px"}}>plus</span>
          <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" 
             style={{marginBottom:"5px"}} height={"14px"}/>
          </a></div>
          <TextField id="outlined-basic" label="search for products brand and more" variant="outlined" 
          style={{width:"500px", backgroundColor:"white",marginLeft:"20px"}}
          />
          {/* <img src="https://www.pngfind.com/pngs/m/432-4323226_search-icon-transparent-search-button-png-png-download.png" 
          ></img> */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1}} >
          {/* <input type={"text"} placeholder="search for products brand and more" className="inputfeild" style={{width:"400px",
          marginRight:"100px"}}></input> */}
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            <Button onClick={()=>Navigate("/")} color="inherit">Home</Button>
            <Button onClick={()=>Navigate("/contact")}  color="inherit">Contact</Button>
           
              {/* <NavLink to="/">Home<NavLink/> */}
            
            <Button onClick={()=>Navigate("/about")}  color="inherit">About Us</Button>
           <span>   
           
      <Badge badgeContent={count} color="secondary">
        <ShoppingCartIcon 
        onClick={()=>Navigate("/cart")}/>
      </Badge>
    
          </span>
          </Typography>
          <Button onClick={()=>Navigate('/tologin')}  color="inherit">Login Page</Button>
        </Toolbar>
      </AppBar>
    </Box>
         {/* <Navigate/> */}

        </div>
        
        </>

    )
};
export default NavBar;



