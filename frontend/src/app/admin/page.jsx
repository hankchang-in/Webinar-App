import React from 'react'
import Link from 'next/link'
import Sidebar from './sidebar/sideNavbar'
const page = () => {
  return (
    <div className='flex'>
      <Sidebar />

      <div className='ml-40 justify-center'>
        <h2 className='mt-4 flex  justify-center'>Admin</h2>
        <div className='mt-5 flex  flex-wrap justify-center'>
          <Link href={'/admin/users'}>
              <div className="users relative flex  justify-center items-end h-60 w-60 border bg-yellow-200 rounded-lg mr-10  overflow-hidden  ">
                <img src="/users.png" className='object-contain h-full w-full' alt="" />
                <h2 className='absolute bottom-2 left-1/2 transform -translate-x-1/2  px-2 py-1 w-full  text-center bg-slate-100 '>Users</h2>
              </div>
          </Link>

          <Link href={'/admin/products'}>
          <div className="products relative flex justify-center items-end h-60 w-60 border bg-yellow-200 rounded-lg mr-10  overflow-hidden  ">
            <img src="/users.png" className='object-contain h-full w-full' alt="" />
            <h2 className='absolute bottom-2 left-1/2 transform -translate-x-1/2  px-2 py-1 w-full  text-center bg-slate-100 '>Products</h2>
          </div>
          </Link>
          <Link href={'/admin/orders'}>
            <div className="orders relative flex justify-center items-end h-60 w-60 border  bg-yellow-200 rounded-lg mr-10  overflow-hidden  ">
              <img src="/users.png" className='object-contain h-full w-full' alt="" />
              <h2 className='absolute bottom-2 left-1/2 transform -translate-x-1/2  px-2 py-1 w-full  text-center bg-slate-100 '>Orders</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default page