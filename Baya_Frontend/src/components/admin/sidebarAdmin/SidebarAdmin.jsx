import { Link } from "react-router-dom";
import "../../../assets/css/admin/dashboard.css"

const SidebarAdmin = () => {

    return (
        <>

            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion width_sidebar" id="accordionSidebar">


                <Link className="sidebar-brand d-flex align-items-center justify-content-center " to="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin <sup>HELLO</sup></div>
                </Link>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">
                    <Link className="nav-link" to="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Thống kê</span></Link>
                </li>


                <hr className="sidebar-divider" />




                <li className="nav-item">
                    <Link className="nav-link collapsed" to="youtube.com" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Quản lí người dùng</span>
                    </Link>

                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="youtube.com" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Quản lí khuyến mãi</span>
                    </Link>

                </li>


                <li className="nav-item">
                    <Link className="nav-link collapsed" to="product" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Quản lí sản phẩm</span>
                    </Link>

                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="youtube.com" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Quản lí danh mục</span>
                    </Link>

                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="youtube.com" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Quản lí đơn hàng</span>
                    </Link>

                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="youtube.com" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Quản lí liên hệ</span>
                    </Link>

                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="youtube.com" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Quản lí bình luận</span>
                    </Link>

                </li>
                <hr className="sidebar-divider" />


            </ul>
        </>
    )

}

export default SidebarAdmin