import Link from 'next/link'
import React from 'react'

const NOTFOUND = () => {
  return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Page not found 😢</p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NOTFOUND