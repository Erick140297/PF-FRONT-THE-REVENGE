import Carousel from "react-bootstrap/Carousel";
import React from "react";
import './Carrousel.css'

const Carouse = () => {
  return (
    <div className="algo">

<Carousel >
      <Carousel.Item interval={1000}   >
        <img
          className="d-block algo"
          src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/laptops/list-d14.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000} >
        <img
          className="d-block algo"
          src="https://images7.alphacoders.com/948/948426.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000} >
        <img
          className="d-block algo"
          src="https://assets2.razerzone.com/images/pnx.assets/0574f0137234bbfdf0ad9af7dcc25b12/axon-wallpaper-desktop-carousel.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000} >
        <img
          className="d-block algo"
          src="https://gameone.ph/media/wysiwyg/GameOne-Inner-Banner-Redragon.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000} >
        <img
          className="d-block algo"
          src="https://dlcdnwebimgs.asus.com/gain/77614B08-0FD4-41FB-9517-ADB95C1F4546/fwebp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
      );
};

export default Carouse;
