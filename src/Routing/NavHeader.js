import axios from "axios";
import React, { useEffect, useState } from "react";
const CategoryHeader=({setSelectCategory})=>{
  const[categoryList,setCategoryList]=useState([]);
 useEffect(()=>{
    getCategories()
 },[])

  const imageList=[
"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1641337627-apple-iphone-13-mini-starlight-1641337610.jpg?crop=1xw:1xh;center,top&resize=480:*",
"https://5.imimg.com/data5/GD/DT/MY-9653287/portable-mini-laptop-500x500.jpg",
"https://m.media-amazon.com/images/I/71dejPxEoWL._SY355_.jpg",
// "https://images.herzindagi.info/image/2021/Apr/fragrance-notesm.jpg",
"https://media.istockphoto.com/id/1249579132/photo/beauty-products-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lDmUkhu7XDdGww_AsQub6jJ55I7WMgAoYrqdopFa-tI=",
"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
"https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
"https://rukminim1.flixcart.com/image/416/416/ktyp8cw0/dining-set/x/1/l/na-rosewood-sheesham-square-4-seater-tf-wddining-d2-true-original-imag76qmhyqzdcye.jpeg?q=70",
"https://dm1ll01jrnse4.cloudfront.net/optimize/opti_1270253902_img0.jpg",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLZ4n4sCuVkzlyRTlW2w0cYyZ5hs2vq9rsw&usqp=CAU",
"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19524874/2022/8/17/0fb689b3-28b4-4f6a-be08-a2ce9dfedcdc1660715206206QOMNBluePrintMandarinCollarTop1.jpg",
"https://m.media-amazon.com/images/G/31/Symbol/2022/SS_22_MFA/Shoes_QC/Women/QC_04._CB629625766_.jpg",
"https://5.imimg.com/data5/WI/EB/MY-45054986/boys-designer-shirts-500x500.jpg",
// "https://5.imimg.com/data5/PP/YS/PL/SELLER-100917393/online-shopping-website-jkenterprises-kanchipuram-jpg-500x500.jpg"
"https://images-eu.ssl-images-amazon.com/images/I/81S1E1Dr-BL._AC._SR360,460.jpg",
"https://fossil.scene7.com/is/image/FossilPartners/ME3233_main?$sfcc_fos_medium$",
"https://rukminim1.flixcart.com/image/312/312/l5ld8y80/watch/r/2/8/1-rosegold-color-queen-magnet-watch-marclex-women-original-imagg8a29fjvs8vr.jpeg?q=70",
"https://rukminim1.flixcart.com/image/332/398/l2f20sw0/shopsy-hand-messenger-bag/2/w/j/stylish-women-shoulder-bag-shoper-1red-hobo-khatushyam-original-imagdrmuuqehg6sy.jpeg?q=50",
"https://5.imimg.com/data5/FJ/AH/MY-42396081/combo-sets-28american-diamond-jewellery-29-500x500.jpg",
// "https://ik.imagekit.io/bfrs/tr:w-1000,h-1000,pr-true,cm-pad_resize,bg-FFFFFF/image_youbella/data/YBNK_5808_1.jpg",
"https://cdn.shopify.com/s/files/1/0661/7423/products/avenger-006-right-view_250x250@2x.jpg?v=1648126355",
"https://image.shutterstock.com/image-illustration/car-parts-around-wheel-isolated-260nw-391570639.jpg",
"https://rukminim1.flixcart.com/image/416/416/jplif0w0/vehicle-pull-along/k/h/k/classic-motorbike-orange-joanna-original-imafbsszavupyfza.jpeg?q=70",
"https://ii1.pepperfry.com/media/catalog/product/s/u/800x880/superscape-outdoor-lighting-gate-pillar-post-lighting-gl4752-l-superscape-outdoor-lighting-gate-pill-46tr4c.jpg",
  ]
  const getCategories=()=>{
    axios.get("https://dummyjson.com/products/categories")
    .then((res)=>setCategoryList(res.data.map((item,index)=>({
       image:imageList[index]|| imageList[0],
       name:item 
    }))))
    .catch((err)=>console.log("err:",err))
  }





  return(
    <>
    <div style={{display:"flex",flexWrap:"wrap",margin:"10px",justifyContent:"center"}}>
    {categoryList.map((item)=>(
        <div style={{margin:"15px"}}>
            <div onClick={()=>{setSelectCategory(item.name)}}>
                <div> <img src={item.image} style={{height:"64px",width:"64px"}}/></div>
                <h5 style={{fontSize:"15px"}}>{item.name}</h5>
            </div>
        </div>
    ))}
    </div>
    </>
  )
};

export default CategoryHeader;