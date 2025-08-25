"use client"
import Hero_sec from "@/components/Hero-sec";
import Services from "@/components/Services";
import Trusted from "@/components/Trusted";
import Features from "@/components/Features";

import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/counter/counterSlice"; 


export default function Home() {
    const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.counter);
  // console.log(users, "users",status,"status")
const data = {
  name: "Bilal Store"
}
 useEffect(() => {
    dispatch(fetchUsers()); // ✅ dispatch thunk
  }, []);
  return (
    <div className="bg-white text-black min-h-screen py-10 md:py-20 ">
      <Hero_sec mydata={data}/>
      <Features Features={users}/>
      <Services/>
      <Trusted/>
    
    </div>
  );
}
