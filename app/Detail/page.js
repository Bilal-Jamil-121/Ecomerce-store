"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/counter/counterSlice";
import { addToCart } from "../redux/cart/cartSlice";
import { useSearchParams, useRouter } from "next/navigation";
import Format from "../Helpers/Format";
import Link from "next/link";

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.counter);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (status === "idle") dispatch(fetchUsers());
  }, [dispatch, status]);

  const selectedUser = users.find((u) => String(u.id) === String(id));
  const inCart = cart.find((i) => String(i.id) === String(selectedUser?.id));
  const atMax = (inCart?.amount || 0) >= 5;

  const handleAddToCart = () => {
    if (!selectedUser || atMax) return;
    dispatch(
      addToCart({
        id: String(selectedUser.id), // 🔑 normalize id
        name: selectedUser.name,
        price: selectedUser.price,
        image: selectedUser.image,
        amount: 1, // add one at a time
      })
    );
    // optional: go to cart
    // router.push("/Add_Cart");
  };

  return (
    <div className="min-h-screen mb-30 flex justify-center items-center bg-white px-4 py-10">
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && selectedUser ? (
        <div className="p-6 max-w-md w-full bg-white rounded-2xl shadow-lg">
          <div className="overflow-hidden rounded-lg">
            <img
              src={selectedUser.image}
              alt={selectedUser.name}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>

          <h2 className="text-2xl font-bold mt-4 text-gray-800">
            {selectedUser.name}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Category: {selectedUser.category}
          </p>
          <p className="text-sm text-gray-500">Brand: {selectedUser.company}</p>
          <h3 className="text-xl font-bold text-gray-800">Description</h3>
            <p className="text-sm text-gray-500">{selectedUser.description}</p>
          <div className="mt-5 flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800">Price</h3>
            <p className="text-lg font-semibold text-blue-600">
              <Format price={selectedUser.price} />
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            
            <Link href="/Add_Cart" className="mx-auto">
           <button
              onClick={handleAddToCart}
              disabled={atMax}
              className="w-full bg-blue-600 p-3 text-white rounded-lg font-semibold shadow hover:bg-blue-500 transition disabled:opacity-50"
            >
              {atMax ? "Max 5 reached" : "Add to Cart"}
            </button>
          </Link>
          </div>
{
  atMax&&(
    <Link href="/Add_Cart" className="block text-center font-bold text-red-600 mt-4 underline">
            Go to Cart
          </Link>
  )
}
          
        </div>
      ) : status === "succeeded" ? (
        <p>User not found</p>
      ) : null}
    </div>
  );
};

export default Page;
