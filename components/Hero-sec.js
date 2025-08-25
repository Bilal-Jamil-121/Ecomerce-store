import React from 'react'
import Link from 'next/link'


const Hero_sec = ({mydata}) => {
    const {name} = mydata


  return (
    <div className='md:grid grid-cols-2 gap-30 max-w-6xl mb-2  mx-auto px-4 sm:px-6 lg:px-8'>
    <div>
        <p>Welcome to</p>
        <h1 className='text-4xl font-bold mt-2'>{name}</h1>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque esse eum aperiam ratione minima assumenda iure deserunt vero quae velit ipsam commodi dolore sequi, molestiae quisquam.</p>
        <div>
<Link href="/product">
 <button className='bg-blue-600 p-2 my-3 text-white cursor-pointer font-semibold rounded hover:bg-blue-500'>
                Shop Now
            </button>
            </Link>
           
        </div>
    </div>
    <div className='md:ml-14'>
        <img className='h-60' src="Heroic.png" alt="hero-img" />
    </div>
    </div>
  )
}

export default Hero_sec