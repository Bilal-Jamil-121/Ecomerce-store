import React from 'react'
import Hero_sec from '@/components/Hero-sec';
const page = () => {
  const data = {
  name: "Bilal Ecommerce"
}
  return (
    <div className=" bg-white text-black  py-10 md:py-20">
      <Hero_sec mydata={data}/>
    </div>
  );
}

export default page