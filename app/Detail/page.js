"use client";

import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/counter/counterSlice";
import { addToCart, decreaseAmount, increaseAmount,setColor } from "../redux/cart/cartSlice";
import { useSearchParams, useRouter } from "next/navigation";
import Format from "../Helpers/Format";
import { MdShoppingCart } from "react-icons/md";

function DetailPageContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.counter);
  const { cart,color } = useSelector((state) => state.cart);
 

  useEffect(() => {
    if (status === "idle") dispatch(fetchUsers());
  }, [dispatch, status]);

  if (status === "loading") return <p className="min-h-screen">Loading...</p>;
  if (status === "failed") return <p className="min-h-screen">  Error: {error}</p>;

  const selectedUser = users.find((u) => String(u.id) === String(id));
  if (!selectedUser) return <p className="min-h-screen">User not found</p>;

  const inCart = cart.find((i) => i.id === String(selectedUser.id) + "-" + color);
const atMax = (inCart?.amount || 0) >= 5;

  
  const colorarr = selectedUser.colors ;

  

const handleAddToCart = () => {
 if (!color || !selectedUser.colors.includes(color)) {
  alert("Please select a color for this product!");
  return;
}

  if (atMax) return;

  dispatch(
    addToCart({
      id: String(selectedUser.id) + "-" + color, // 👈 make id unique per color
      name: selectedUser.name,
      price: selectedUser.price,
      image: selectedUser.image,
      amount: 1,
      color, // 👈 save color
    })
  );

  router.push("/Add_Cart");
};


  return (
    <div className="min-h-screen flex justify-center items-center mb-20 bg-white px-4 py-10">
      <div className="p-6 max-w-md w-full bg-gradient-to-br from-gray-300 to-white rounded-2xl shadow-lg">
        <div className="overflow-hidden rounded-lg">

          <img
            src={selectedUser.image}
            alt="product"
            className="w-full h-64 object-cover rounded"
          />

        </div>

        <h2 className="text-2xl font-bold mt-4 text-gray-800">
          {selectedUser.name}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Category: {selectedUser.category}
        </p>
        <p className="text-sm text-gray-500">Brand: {selectedUser.company}</p>

        <h3 className="text-xl font-bold text-gray-800 mt-4">Description</h3>
        <p className="text-sm text-gray-500">{selectedUser.description}</p>

        <div className="mt-5 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800">Price</h3>
          <p className="text-lg font-semibold text-blue-600">
            <Format price={selectedUser.price} />
          </p>
        </div>
       <div className="flex gap-2 mt-3">
  {colorarr.map((c, i) => (
    <button
      key={i}
      onClick={() => dispatch(setColor(c))}
       className={`w-8 h-8 rounded-full cursor-pointer transition 
        ${color === c ? "border-2 scale-120" : ""}`}
      style={{ backgroundColor: c }}
    />
  ))}
</div>

        <button
          onClick={handleAddToCart}
          disabled={atMax}
          className="w-full mt-4 bg-blue-600 p-3 cursor-pointer text-white rounded-lg font-semibold shadow disabled:cursor-not-allowed hover:bg-blue-500 transition disabled:opacity-50"
        >
          {atMax ? "Max 5 reached" : "Add to Cart"}
        </button>

        {atMax && (
          <button
            onClick={() => router.push("/Add_Cart")}
            className=" w-full mt-3 cursor-pointer flex text-center justify-center items-center gap-2 font-bold text-red-600 underline"
          >
            <span>Go to Cart</span> <MdShoppingCart className="w-5 h-5 text-red-600" />
          </button>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DetailPageContent />
    </Suspense>
  );
}
