"use client";  // client component banana zaroori

import React from "react";
import { useRouter } from "next/navigation";  // ✅ App Router ka hook
import Format from "@/app/Helpers/Format";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleData = (product) => {
    router.push(`/Detail?id=${product.id}`); // query param bhejna
  };

  return (
    <div
      className="p-4 border h-60 rounded shadow relative bg-cover bg-center hover:scale-105 transition-transform2"
      style={{
        backgroundImage: `url(${product.image})`,
      }}
    >
      
      <h2 className="text-lg text-gray-300 font-semibold">{product.name}</h2>

      <div className="relative z-10 flex justify-center h-full items-center">
        <button
          onClick={() => handleData(product)}
          className="bg-gray-700 opacity-80 hover:opacity-100 py-2 px-4 cursor-pointer rounded text-white text-sm"
        >
          Detail
        </button>
      </div>

      <p className="text-white font-bold mt-2 absolute right-1 bottom-0">
      <Format price={product.price}/>
      </p>
    </div>
  );
};

export default ProductCard;
