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

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );
  const totalAmount = cart.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="min-h-screen p-2 md:p-6 mb-20">
      <h1 className="text-2xl font-bold mb-4 text-center">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Cart is empty</p>
      ) : (
        <div className="overflow-x-auto">
          {/* Table */}
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Product</th>
                <th className="p-2">Color</th>
                <th className="p-2">Qty</th>
                <th className="p-2">Price</th>
                <th className="p-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  {/* Product */}
                  <td className="flex flex-col md:flex-row items-center gap-1 md:gap-2 p-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                    />
                    <span className="hidden md:flex font-medium">{item.name}</span>
                    <p className="md:hidden">{item.name}</p>
                  </td>

                  {/* Color */}
                  <td className="text-center">
                    {item.color ? (
                      <span
                        className="inline-block w-4 h-4 rounded-full border"
                        style={{ backgroundColor: item.color }}
                      ></span>
                    ) : (
                      "-"
                    )}
                  </td>

                  {/* Quantity Controls */}
                  <td className="text-center">
                    <div className="flex items-center justify-center gap-1 md:gap-2">
                      <button
                        onClick={() => dispatch(decreaseAmount(item.id))}
                        disabled={item.amount === 1}
                        className="md:px-2 md:py-1 p-1 bg-gray-300 rounded cursor-pointer disabled:opacity-50 disabled:cursor-none"
                      >
                        -
                      </button>
                      <span>{item.amount}</span>
                      <button
                        onClick={() => dispatch(increaseAmount(item.id))}
                        disabled={item.amount === 5}
                        className="md:px-2 md:py-1 p-1 bg-gray-300 rounded cursor-pointer disabled:opacity-50 disabled:cursor-none"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="text-center pl-1 font-semibold">
                    <Format price={item.price * item.amount} />
                  </td>

                  {/* Remove */}
                  <td className="text-center">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-600 font-bold"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Summary */}
          <div className="mt-4 text-right md:text-center space-y-2">
            <div className="font-bold text-lg">
              Total Items: {totalAmount}
            </div>
            <div className="font-bold text-lg">
              Total Price: <Format price={totalPrice} />
            </div>
          </div>

          {/* Clear Cart Button */}
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg font-bold"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Add_Cart;
