'use client'
import Sidebar from '../Navbar/Navbar'
import './Dashboard.css'

export default function Dashboard(){
    return (
        <div  className="flex h-6/6">
            <div className='h-3/3'>
                <Sidebar></Sidebar>
            </div>
           <div className="feature-box flex-1 p-5 grid grid-cols-2 grid-rows-2 gap-10">
                <div className='border-2 border-amber-200 flex justify-center  w-80 h-72 items-end  bg-[url(/trending_products.jpeg)]  bg-cover bg-center'>
                    <h1 className='text-amber-50 text-2xl'>Products</h1>
                </div>
                <div className='border-2 feature-box-2 border-amber-200  flex justify-center items-end w-80 h-72 bg-[url(https://cdn-icons-png.flaticon.com/512/3126/3126647.png)]  bg-contain bg-center bg-no-repeat'>
                    <h1 className='text-yellow-500 text-2xl'>Customers</h1>
                </div>
                <div className='border-2 border-amber-200  flex justify-center w-80 h-72 items-end  bg-[url(/trending_products.jpeg)]  bg-cover bg-center'>
                    <h1>Webinars</h1>
                </div>
                <div className='border-2 border-amber-200  flex justify-center w-80 h-72 items-end  bg-[url(/trending_products.jpeg)]  bg-cover bg-center'>
                    <h1>Insights</h1>
                </div>
            </div>
        </div>
    )
}