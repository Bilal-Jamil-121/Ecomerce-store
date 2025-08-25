'use client'
import React, { useState } from 'react';
import Link from 'next/link';
const Nav = () => {
      const [menuclick, setmenuclick] = useState(false);

  function handlemenu() {
    setmenuclick(!menuclick);
  }
  return (
    <nav className='bg-gradient-to-r from-green-700 to-green-100  text-black px-6 md:px-32 py-4 shadow-lg'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <h1 className='text-2xl font-extrabold text-white tracking-tight'>Bilal Store</h1>

        {/* Desktop menu */}
        <ul className='hidden md:flex gap-8 font-medium text-lg'>
          <li>
            <Link href='/' className='hover:text-white hover:font-semibold transition'>
             Home
            </Link>
          </li>
          <li>
            <Link href='/about' className='hover:text-white hover:font-semibold transition'>
             About
            </Link>
          </li>
          <li>
            <Link href='/product' className='hover:text-white hover:font-semibold transition'>
              Product
            </Link>
          </li>
          <li>
            <Link href='/contact' className='hover:text-white hover:font-semibold transition'>
             Contact
            </Link>
          </li>
          <li>
            <Link className='text-black cursor-pointer flex p-1 items-center' href='/Add_Cart'>
            <img className='h-5' src="shopping-cart-.svg" alt="shopping-cart" />
            </Link>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={handlemenu}
          className='md:hidden bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition'
        >
          <img className='h-6 w-6' src='/menu.svg' alt='menu' />
        </button>
      </div>

      {/* Mobile menu */}
     {menuclick && (
  <div className='md:hidden bg-gray-100 rounded mt-3 px-4 py-3 shadow-inner'>
    <ul className='flex flex-col gap-4 text-base font-medium text-gray-800'>
      <Link href='/' onClick={handlemenu}>
        <li  onClick={handlemenu} className='hover:text-blue-600 transition w-full px-2 py-1'>  Home</li>
      </Link>
      <Link href='/about' onClick={handlemenu}>
        <li  onClick={handlemenu} className='hover:text-blue-600 transition w-full px-2 py-1'>About</li>
      </Link>
      <Link href='/contact' onClick={handlemenu}>
        <li  onClick={handlemenu} className='hover:text-blue-600 transition w-full px-2 py-1'>contact</li>
      </Link>
      <Link href='/product' onClick={handlemenu}>
        <li  onClick={handlemenu} className='hover:text-blue-600 transition w-full px-2 py-1'>Product</li>
      </Link>
      
            <Link className='text-black cursor-pointer flex p-1 items-center' href='/Add_Cart'>
            <li className='flex gap-2'> 
            
              <span>Cart </span>
              <img className='h-5' src="shopping-cart-.svg" alt="shopping-cart" />
              </li>
            </Link>
          
    </ul>
  </div>
)}

    </nav>
  )
}

export default Nav