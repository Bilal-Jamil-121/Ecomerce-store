"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers} from "../redux/counter/counterSlice";
import ProductCard from '@/components/ProductCard';
import Loading from '@/components/Loading';
import { setCategoryFilter, setSearchQuery, setColorFilter  } from '../redux/counter/counterSlice';
import { MdFilterList } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {

  // state for phone filteration
  const [Filter, setFilter] = useState(false)

// fuction to set filter false
const filterfalse= ()=>{
  setFilter(false)
}
  const dispatch = useDispatch();
  const { users, status, error, searchQuery, categoryFilter,ColorFilter } = useSelector((state) => state.counter);
// filter method
  const filterProducts = users.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchCategory = categoryFilter === "All" || p.category === categoryFilter;
    const matchColor=  ColorFilter === "All" || p.colors.includes(ColorFilter) ;
    return matchSearch && matchCategory && matchColor;
  });
  // array for Filtered category
  const catArray = [...new Set(users.map((p) => p.category))]

// array for color filter
 const colorarray= [...new Set(users.flatMap((p)=>p.colors))]
console.log(colorarray);


  // users fetch karo jab component load ho
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  // use effect to change body style  and --aos--
  useEffect(() => {
  if (Filter) {
    document.body.style.overflow = "hidden"; // ❌ disable scroll
     AOS.init({ duration: 800, once: true });
  } else {
    document.body.style.overflow = "auto"; // ✅ enable scroll again
  }

  // cleanup when component unmounts
  return () => {
    document.body.style.overflow = "auto";
  };
}, [Filter]);




  if (status === "loading") return <div className="flex items-center justify-center h-screen"><Loading/> </div> ;
  if (status === "failed") return <p className="min-h-screen">Error: {error}</p>;

  return (
    <div className={`${Filter?"overflow-y-hidden":"min-h-screen flex bg-white text-black  pb-30 gap-6 p-6 md:px-30"}`}>
      {/* fiter section for laptop */}
      <div data-aos={Filter?"fade-right":""} className={`${ Filter?"fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 p-4 pt-20":"md:flex hidden"}`}>
      <div className=' md:col-span-1 md:border-r pr-4'>
        {/* search */}
        <div className='flex justify-between items-center'>
           <h2 className="text-lg font-semibold mb-4">Filters</h2>
           <button className='md:hidden bg-red-500 text-white  px-2 rounded ' onClick={()=>setFilter(!Filter)}>X</button>
        </div>
       
        <input
          type="text"
          placeholder="Search..."
          className="w-full border hidden md:flex p-2 mb-4 rounded"
          
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        {/* category */}
        <div className='mb-6'>
          <h1 className="text-lg font-semibold mb-4">Category:</h1>
          <div className='flex flex-col text-lg'>

            <button className='cursor-pointer flex  hover:underline hover:text-blue-500' onClick={() => {filterfalse(); dispatch(setCategoryFilter("All"))}}>All</button>
            {catArray.map((item, i) => (
              <button className='cursor-pointer flex  hover:underline hover:text-blue-500 ' onClick={() =>{filterfalse(); dispatch(setCategoryFilter(item))}} key={i} >{item}</button>
            ))}
          </div>
        </div>
        <h1 className="text-lg font-semibold mb-4">Category:</h1>
        <select
          className="md:w-full border p-2 rounded"
          value={categoryFilter}
          onChange={(e) => { filterfalse(); dispatch(setCategoryFilter(e.target.value))}}
        >
          <option value="All">All</option>
          {catArray.map((item, i) => (
            <option key={i} value={item}>{item}</option>
          ))}
  </select>

            {/* colors */}
            <div>
              <h1 className="text-lg font-semibold my-4">Colors</h1>
              <div className='flex gap-2'>
                <button  
                className="w-6 h-6 rounded-full  cursor-pointer" 
                onClick={()=> {filterfalse(); dispatch(setColorFilter("All"))}} >
                               All
                  </button>
                {
                  colorarray.map((color,item)=>(
                    <button
                     key={item} 
                      className="w-6 h-6 rounded-full border cursor-pointer" 
                      style={{ backgroundColor: color }}
                      onClick={()=>{filterfalse(); dispatch(setColorFilter(color))}}
                      >
                        
                    </button>
                  ))
                }
              </div>
            </div>
</div>
      </div>

      {/* Right Side Products */}
      <div className={`col-span-3 flex w-full flex-col gap-4 ${Filter?"opacity-40 ":""}`}>
       {/* filter menu for phone */}
        <div className='flex gap-3 items-center'>
           {/* filter button for phone */}
          <button
           className='flex items-center md:hidden' 
           onClick={()=>setFilter(!Filter)}
          >
            <MdFilterList size={30}/>
      </button>
  {/* phone search */}
 <input
          type="text"
          placeholder="Search..."
          className="w-full md:hidden border p-2 mb-4 rounded"
          value={searchQuery}
         disabled={Filter}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        </div>
                    
       
        {/* 👉 Product Count */}
        <h2 className="text-lg font-semibold">
          {filterProducts.length} Products Found
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found
            </p>
          )}

        </div>
      </div>
    </div>
  );
}

export default Product;
