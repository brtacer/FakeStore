import React from "react";
import { useNavigate } from "react-router-dom";

const SliderProduct = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="!flex items-center justify-between bg-gray-100 px-6 ">
      <div className="flex-col justify-between">
        <div className="text-3xl font-bold">{product?.title}</div>
        <div className="text-lg my-4">{product?.description}</div>
        <div
          className="border rounded-lg cursor-pointer text-xl w-[150px] h-12 flex items-center justify-center bg-gray-200"
          onClick={() => navigate(`products/${product?.id}`)}
        >
          İncele
        </div>
      </div>
      <img className="w-[250px] h-[250px] my-10" src={product?.image} alt="" />
    </div>
  );
};

export default SliderProduct;
