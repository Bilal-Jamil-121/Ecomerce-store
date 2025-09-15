"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader"; // ✅ correct import

const Loading = () => {
  return (
  
      <ClipLoader color="#000000" size={60} />
    
  );
};

export default Loading;