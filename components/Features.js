import React from "react";
import ProductCard from "./ProductCard";
import Loading from "./Loading";

const Features = ({ Features }) => {
  return (
    <div className="md:px-32 mx-3 md:mx-0">
      <h1 className="text-xl font-bold mb-4">Features</h1>

      {Features.length === 0 ? (
          <div className="flex items-center justify-center"><Loading/> </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  ">
          {Features.slice(0, 3).map((val, i) => (
            <ProductCard key={i} product={val} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Features;
