import React from 'react'

const AddProduct = () => {
  return (
    <div className='popupContainer bg-gray-50  w-12/12 h-96 absolute border border-black rounded-xl' style={{top:"10%" , width:"73%"}}>
        <div className='flex justify-center ' >
            <h1 className=''>Add Product</h1>
        </div>
        <div className="addProductForm p-4">
            <form action="">
            <div>
                <label  className="block text-gray-600 text-sm mb-1" htmlFor="">Name</label>
                <input className='w-4/12 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" />
            </div>

            <div>
                <label  className="block text-gray-600 text-sm mb-1" htmlFor="">Price</label>
                <input className='w-4/12 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" />
            </div>

            <div>
                <label  className="block text-gray-600 text-sm mb-1" htmlFor="">Slots</label>
                <input className='w-4/12 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" />
            </div>

            <div>
                <label  className="block text-gray-600 text-sm mb-1" htmlFor="">Description</label>
                <input className='w-4/12 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" />
            </div>
            <button className='p-1 w-20 m-3 bg-green-500 border border-black rounded-lg'>Add</button>
            <button className='p-1 w-20 m-3 bg-red-500 border border-black rounded-lg'>Cancel</button>
            </form>
            
        </div>
    </div>
  )
}

export default AddProduct