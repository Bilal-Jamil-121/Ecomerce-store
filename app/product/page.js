"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/counter/counterSlice"; 
import ProductCard from '@/components/ProductCrard';

const Product = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.counter);

  // users fetch karo jab component load ho
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p className="min-h-screen">Loading...</p>;
  if (status === "failed") return <p className="min-h-screen">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-white text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  pb-30 gap-6 p-6 md:px-32">
      {users.map(user => (
        <ProductCard key={user.id} product={user} />
      ))}
    </div>
  );
}

export default Product;
