"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseAmount,
  decreaseAmount,
  removeFromCart,
  clearCart,

} from "../redux/cart/cartSlice";
import Format from "../Helpers/Format";



const Add_Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.amount, 0);
  const totalAmount = cart.reduce((acc,item)=> acc + item.amount,0);
  return (
    <div>
    <div className="hidden min-h-screen md:flex flex-col items-center p-1 md:p-6 mx-1 overflow-auto">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Cart is empty</p>
      ) : (
        <div className="w-full max-w-2xl space-y-4">
          {cart.map((item) => (
            <div
              key={String(item.id)}
              className="flex md:flex-row items-center justify-between bg-gray-200 md:p-4 p-2 text-sm md:text-lg rounded-lg shadow"
            >
              <div className="flex items-center gap-1 md:gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="font-bold">{item.name}</h2>
                 
                </div>
              </div>
 {item.color && (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <span>Color:</span>
      <span
        className="w-4 h-4 rounded-full border"
        style={{ backgroundColor: item.color }}
      />
    </div>
  )}
              <div className="flex items-center gap-1 md:gap-3">
                <button
                  onClick={() => dispatch(decreaseAmount(item.id))}
                  disabled={item.amount === 1}
                  className="px-2 py-1 text-2xl md:bg-gray-300 rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                >
                  -
                </button>
                <span>{item.amount}</span>
                <button
                  onClick={() => dispatch(increaseAmount(item.id))}
                  disabled={item.amount === 5}
                  className="px-2 py-1 text-2xl md:bg-gray-300 rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                >
                  +
                </button>
              </div>

              <div><Format price={item.price * item.amount} /></div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                
                className="text-red-600 font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
          ))}

          <div className="mt-4 text-lg font-bold">
            Total Price: <Format price={totalPrice}/>
          </div>
              <div className="mt-4 text-lg font-bold">
                  Total Items: {totalAmount}
              </div>
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-6 w-full bg-red-500 text-white py-2 cursor-pointer rounded-lg font-bold"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
    
    </div>
  );
};

export default Add_Cart;
