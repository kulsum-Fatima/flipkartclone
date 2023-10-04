import React from "react";
import { Button,Carousel,Form  } from 'react-bootstrap';

const CarousalNew = ()=>{
    return (
      <div >
        <Carousel
        className="carousel"
         >
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          // src="https://www.creatopy.com/blog/wp-content/uploads/2018/11/omega-responsive-image-slider-1024x566.png" height="400px"
          src="https://static.langimg.com/thumb/msid-86985567,imgsize-30392,width-540,height-405,resizemode-75/flipkart-big-diwali-sale-86985567.jpg" height={"400px"}
          alt="First slide"
        />

        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybiieh2OA_yxNnJS8zfgqekgN410bkepMBw&usqp=CAU"  height="500px"
          // src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/b491d4740017a54f.jpg?q=50" height={"500px"}
          // src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a84e58e11c8b10b6.png?q=100" height="500px"
          // src="https://image.shutterstock.com/image-photo/set-cosmetics-contouring-makeup-on-260nw-1408306232.jpg" height={"400px"}
          src="https://assets.thehansindia.com/h-upload/2021/10/14/1117163-flipkart.jpg" height={"400px"} 
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          // src="https://i.ytimg.com/vi/Uq9TUU7EcH4/maxresdefault.jpg"  height="600px"
          // src="https://c.ndtvimg.com/2022-06/mc4gbsag_makeup650_625x300_01_June_22.jpg" height={"400px"}
          src="https://st1.bgr.in/wp-content/uploads/2022/09/Untitled-design-2022-09-30T090747.630.jpg" height={"400px"}
          // src="https://rukminim1.flixcart.com/fk-p-flap/50/50/image/29c34b6c873e029c.jpg?q=50" height="600px"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
    )
}

export default CarousalNew;