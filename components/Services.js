import React from 'react'

const Services = () => {
  return (
    <div className=' max-w-6xl md:grid grid-cols-3 gap-20 mt-10 mx-auto px-4 sm:px-6 lg:px-8'>
        {/* service-1 */}
       <div className='bg-gray-300 md:px-10 md:py-10 rounded flex items-center md:flex-col px-5 py-4 gap-4 mb-2' >
             <img className='md:mx-auto bg-gray-200 rounded-full p-2 ' src="truck-delivery.svg" alt="truc-img" /> 
             <p>Super fast and free delivery</p>  
       </div>
       {/* service-2 */}
       <div className='mb-2'>
           <div  className='bg-gray-300 flex gap-4 items-center px-5 py-4 mb-2'>
                <img className=' bg-gray-200 rounded-full p-2 ' src="security.svg" alt="" />
                <p> Non contact shipping</p>
            </div> 
           <div  className='bg-gray-300 flex gap-4 items-center px-5 py-4'>
                <img className=' bg-gray-200 rounded-full p-2 ' src="money-back.svg" alt="" />
                <p> Money-back Guaranteed</p>
            </div> 
       </div>
       {/* service-3 */}
        <div className='bg-gray-300 md:px-10 md:py-10 rounded flex items-center md:flex-col px-5 py-4 gap-4 mb-2'>
             <img className='md:mx-auto bg-gray-200 rounded-full p-2 ' src="super-secure.svg" alt="truc-img" /> 
             <p> Super secure payment system</p>  
       </div>
       
    </div>
  )
}

export default Services