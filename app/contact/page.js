import React from 'react'

const page = () => {
  return (
    <div className='  bg-white text-black py-10 md:py-10  '>
        <h2 className='text-2xl flex justify-center mb-5'>Contact</h2>
       <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13594.026743172482!2d74.2236186930384!3d31.592573214557795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191d763e50e779%3A0xb0fd0578ae8706fd!2sAl%20Rehman%20Garden%20Phase%202%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1755599236243!5m2!1sen!2sus"
   className="w-full h-[450px] rounded-lg shadow"
 
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


        <div >
            {/* Contact Form */}
      <form action="https://formspree.io/f/mzzvwekg" method="post" className="max-w-sm  mx-5 md:mx-auto my-8 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="font-medium">Enter username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            autoComplete="off"
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
               <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium">Enter email</label>
          <input
            type="email"
            name="username"
            id="email"
            placeholder="email"
            autoComplete="off"
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <textarea className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" name="message" id="message" placeholder='Massege' required></textarea>
        <div className='flex justify-center '>
            <input className=' bg-blue-700 text-white font-semibold rounded p-2 px-4 cursor-pointer hover:bg-blue-500' type="submit" value="send" />
        </div>
      </form>
        </div>
    </div>
  )
}

export default page