import React from 'react'

const Trusted = () => {
  return (
    <div className='bg-gray-200 mt-10 p-10 mb-2'>
        <div>
                <h1 className='flex justify-center'>Trusted by 1000+ Companies</h1>
        </div>
        <div className=' mt-10  md:max-w-6xl gap-y-2 mx-auto grid grid-cols-2 gap-6 md:grid-cols-5 justify-center'>
<div><img className='h-10 ' src="airbnb.png" alt="" /></div>
<div><img className='h-8 ' src="company-2.png" alt="" /></div>
<div><img className='h-8 ' src="company-3.png" alt="" /></div>
<div><img className='h-6 ' src="company-4.png" alt="" /></div>
<div><img className='h-8 hidden md:flex ' src="company-2.png" alt="" /></div>

        </div>
    </div>
  )
}

export default Trusted