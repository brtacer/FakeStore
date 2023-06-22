import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[200px] h-[200px] object-cover"
        src={cart.image}
        alt=""
      />
      <div className="font-bold w-[300px]">
        <div>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold w-[200px]">
        <div>Birim Fiyat: {cart?.price} TL </div>
        <div>Adet: {cart?.quantity} </div>
      </div>

      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white w-[100px] h-10 flex items-center justify-center rounded-lg cursor-pointer"
      >
        Ürünü sil
      </div>
    </div>
  );
};

export default CartComp;
