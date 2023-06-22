import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import SliderProduct from "./SliderProduct";

const SliderComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { products } = useSelector((state) => state.products);

  console.log(products);

  return (
    <div className="max-h-[330px]">
      <Slider {...settings}>
        {products?.map((product, i) => (
          <SliderProduct key={i} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;
