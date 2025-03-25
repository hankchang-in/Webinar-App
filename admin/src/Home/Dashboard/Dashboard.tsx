import Sidebar from '../Navbar/Navbar'
import './Dashboard.css'
import DashboardTemplate from '../Dashboard/DashboardTemplate/DashboardTemplate'
export default function Dashboard(){
    return (
        <div  className="flex h-6/6">
            <div className='h-3/3'>
                <Sidebar></Sidebar>
            </div>
            <DashboardTemplate></DashboardTemplate>
           </div>
    )
}