import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-950 relative text-white mt-10 px-2 md:px-0 text-sm'>
            {/* get started */}
            <div className='md:flex justify-between md:w-4xl mx-auto bg-gray-200   p-10 px-25 relative bottom-20 rounded-2xl'>
                <div className='text-black' >
                    <p>Ready to get started?</p>
                    <p>Talk to us today</p>
                </div>
                <button className=' bg-blue-700 text-white font-semibold rounded p-2 px-4 cursor-pointer hover:bg-blue-500'>Get Started</button>
            </div>
            {/* main footer */}
            <div className='grid md:grid-cols-4  gap-5 justify-between   md:w-5xl mx-auto px-10 md:pl-25 rounded-2xl'>
                <div>
                    <h1>Bilal Store</h1>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <p>Subscribe to get important updates</p>
                    <form action="https://formspree.io/f/mzzvwekg" method="post">
                        <input className='bg-white p-3 text-gray-700 text-sm focus:outline-none rounded' type="email" name="email" id="email" required placeholder='YOUR E-MAIL' />
                        <input className=' mt-2 bg-blue-700 text-white font-semibold rounded p-2 px-4 cursor-pointer hover:bg-blue-500' type="submit" value="subscribe" />
                    </form>
                </div>
                <div>
                    <h1>Follow us</h1>
                    <div className='flex gap-4 mt-2'>
                            <img className='invert border-2 border-black p-1 rounded-full  ' src="discord.png" alt="" />
                            <img className='invert border-2 border-black p-1 rounded-full  ' src="instagram.png" alt="" />
                            <img className='invert border-2 border-black p-1 rounded-full  ' src="youtube.png" alt="" />
                    </div>
                </div>
                <div>
                    <p>Call us</p>
                    <a href="tel:+92 123 456 7890">+92 123 456 7890</a>
                </div>
            </div>
            <div className='mt-2'>
                <hr />
                <div className='grid md:grid-cols-2 gap-y-2 justify-between   md:w-5xl mx-auto p-10 md:pl-25 '>
                    <p>
                        @{new Date().getFullYear()} Bilal Jamil. All Rights Reserved
                    </p>
                    <div>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS & CONDITIONS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer