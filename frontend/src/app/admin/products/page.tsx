"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/sideNavbar'
import ProductList from './productList'

const page = () => {
 
  return (
    <div className='flex'>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className='container '>
          <div className='productList '>
                <ProductList></ProductList>
          </div>
      </div>
    </div>
  )
}

export default page