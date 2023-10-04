import { Button, Input } from "@mui/material";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  Axios  from "axios";
const ariaLabel = { 'aria-label': 'description' };
const LoginPage=()=>{
    const[data,setData]=useState();

    // const GetDataFunc = async()=>{
    //     const res = await axios.get("https://dummyjson.com/users")
    //     setData(res.data.users)
    // }
    const Navigate =useNavigate();
    const initialToken=localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);
    const  GetDataFunc=()=>{
        Axios.post("https://reqres.in/api/register",{
            email:"eve.holt@reqres.in",
            password:"cityslicka"
        })
        .then((res)=>{console.log(res.data)
            // setToken(res.data.key)
            localStorage.setItem('token', res.data.token)
            Navigate("/", {replace: true})
        })
            .catch((err) => {
                console.log(err.res.data);
              });
    }

    // useEffect(()=>{
    //     GetDataFunc()
    // },[])

    console.log("data:- ",data)

    // const Navigate =useNavigate();
    return(
        <>
        <div>
        <div style={{dispaly:"flex",flexDirection:"column",margin:"100px"}}>
           
        <div style={{padding:"20px"}}>
        <Input placeholder="Email" inputProps={ariaLabel} />
        </div>
        <div>
        <Input placeholder="Password" inputProps={ariaLabel} />
        </div>
        <Button style={{margin:"20px"}}  
         type="submit"
        //   onClick={()=>Navigate("register")}
        onClick={GetDataFunc}
          >LogIn Form</Button>
        </div>
        </div>
        </>
    )

};
export default LoginPage;