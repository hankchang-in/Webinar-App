"use client";

import React, { useState , useEffect } from "react";
import AddProduct from "./addProduct";
import {productsAPI} from '../../api/apiCalls'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
      try{
        const data = await productsAPI()
        console.log('running'  , data.data)
        setProducts(data.data)
      }catch(err){
        console.log(err)
      }
    };
    useEffect(() => { 
      fetchData()
    },[])
  
  // Handle delete product
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Handle edit product (For now, just logging)
  const handleEdit = (id) => {
    console.log("Editing product:", id);
  };

  return (
    
    <div className="p-5 max-w-4xl mx-auto">
      {/* Add Product Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Product List</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Product
        </button>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto h-1/2">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Slots</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product , index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
                <td className="border border-gray-300 px-4 py-2">${product.productPrice}</td>
                <td className="border border-gray-300 px-4 py-2">{product.productQuantity}</td>
                <td className="border border-gray-300 px-4 py-2">{product.status ? product.status : 'No Status found'}</td>
                <td className="border border-gray-300 px-4 py-2">{product.createdAt}</td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-2">
                  <button
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="">

        {/* <AddProduct /> */}
      </div>
    </div>
  );
};

export default ProductList;
