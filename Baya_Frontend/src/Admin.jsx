
import "../src/assets/css/admin/sb-admin-2.min.css"

import "../src/assets/vendor/fontawesome-free/css/all.min.css"

import { Outlet } from 'react-router-dom'
import SidebarAdmin from './components/admin/sidebarAdmin/SidebarAdmin';
import HeaderAdmin from './components/admin/headerAdmin/HeaderAdmin';


const Admin = () => {
    return (
        <div id="page-top">


            <div id='wrapper'>
                <SidebarAdmin />
                <div id="content-wrapper" className='d-flex flex-column'>
                    <div id='content'>
                        <HeaderAdmin />
                        <Outlet />

                    </div>

                </div>


            </div>
        </div>
    );
}

export default Admin