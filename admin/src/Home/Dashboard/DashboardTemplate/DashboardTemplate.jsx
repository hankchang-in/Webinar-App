import { useRouter } from "next/navigation"
import './DashboardTemplate.css'
export default function DashboardTemplate(){
    const router = useRouter()
    return (
        <div>
            <div className="feature-box p-5  m-5 grid grid-cols-3 grid-rows-2 gap-32">
                <div onClick={()=>{router.push('/products')}} className='feature-box-1 border-2 rounded-2xl  flex justify-center w-80 h-72 items-end  bg-[url(/trending_products.jpeg)]  bg-cover bg-center'>
                    <h1 className='text-amber-50 text-2xl'>Products</h1>
                </div>
                <div onClick={()=>{router.push('/customers')}} className='border-2 feature-box-2 border-amber-200 rounded-2xl  flex justify-center items-end w-80 h-72 bg-[url(https://cdn-icons-png.flaticon.com/512/3126/3126647.png)]  bg-contain bg-center bg-no-repeat'>
                    <h1 className='text-amber-50 text-2xl'>Customers</h1>
                </div>
                <div onClick={()=>{router.push('/webinars')}} className='feature-box-3 border-2 border-amber-200 rounded-2xl  flex justify-center w-80 h-72 items-end  bg-[url(https://cdn-icons-png.flaticon.com/512/5930/5930147.png)]  bg-cover bg-center'>
                    <h1 className='text-amber-50 text-2xl'>Webinars</h1>
                </div>
                <div onClick={()=>{router.push('/orders')}} className='feature-box-4 border-2 border-amber-200 rounded-2xl   flex justify-center w-80 h-72 items-end  bg-[url(https://cdn-icons-png.flaticon.com/512/3338/3338579.png)]  bg-contain bg-center no-bg-no-repeat'>
                    <h1 className='text-amber-50 text-2xl'>Orders</h1>
                </div>
                <div onClick={()=>{router.push('/reports')}} className='feature-box-5 border-2 border-amber-200 rounded-2xl flex justify-center w-80 h-72 items-end  bg-[url(https://cdn3d.iconscout.com/3d/premium/thumb/report-3d-icon-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-chart-graph-pack-business-icons-4818086.png?f=webp)]  bg-cover bg-center'>
                    <h1 className='text-amber-50 text-2xl'>Reports</h1>
                </div>
                <div onClick={()=>{router.push('/analytics')}} className='feature-box-6 border-2 border-amber-200 rounded-2xl flex justify-center w-80 h-72 items-end  bg-[url(https://cdn-icons-png.flaticon.com/512/1055/1055644.png)]  bg-cover bg-center'>
                    <h1 className='text-amber-50 text-2xl'>Analytics</h1>
                </div>
            </div>
 
        </div>
    )
}