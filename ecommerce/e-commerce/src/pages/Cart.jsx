import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);

  console.log(carts, totalAmount, itemCount);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end my-10 text-3xl gap-3">
            Toplam Tutar: <span className="font-bold">{totalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div className="text-2xl font-bold">Sepet Boş</div>
      )}
    </div>
  );
};

export default Cart;
