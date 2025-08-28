"use client";

import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/counter/counterSlice";
import { addToCart } from "../redux/cart/cartSlice";
import { useSearchParams, useRouter } from "next/navigation";
import Format from "../Helpers/Format";
import Image from "next/image";

function DetailPageContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.counter);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (status === "idle") dispatch(fetchUsers());
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  const selectedUser = users.find((u) => String(u.id) === String(id));
  if (!selectedUser) return <p>User not found</p>;

  const inCart = cart.find((i) => String(i.id) === String(selectedUser.id));
  const atMax = (inCart?.amount || 0) >= 5;

  const handleAddToCart = () => {
    if (atMax) return;
    dispatch(
      addToCart({
        id: String(selectedUser.id),
        name: selectedUser.name,
        price: selectedUser.price,
        image: selectedUser.image,
        amount: 1,
      })
    );
    if (atMax) router.push("/Add_Cart");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white px-4 py-10">
      <div className="p-6 max-w-md w-full bg-white rounded-2xl shadow-lg">
        <div className="overflow-hidden rounded-lg">
        
<Image
  src={selectedUser.image}
  alt={selectedUser.name}
  width={500}
  height={500}
  className="w-full h-64 object-cover"
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

        <button
          onClick={handleAddToCart}
          disabled={atMax}
          className="w-full mt-4 bg-blue-600 p-3 text-white rounded-lg font-semibold shadow hover:bg-blue-500 transition disabled:opacity-50"
        >
          {atMax ? "Max 5 reached" : "Add to Cart"}
        </button>

        {atMax && (
          <button
            onClick={() => router.push("/Add_Cart")}
            className="block w-full mt-3 text-center font-bold text-red-600 underline"
          >
            Go to Cart
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
