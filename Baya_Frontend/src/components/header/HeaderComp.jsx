import { Link } from "react-router-dom"

const HeaderComp = () => {
    return (
        <>
            <div className="header">
                <div className="header_main">

                    <div className="header_logo">
                        <a to="index.html"><img src="./src/assets/images/logo/logo-final (3) (1).png" alt="logo" /> </a>
                    </div>
                    <div to="" className="header_item item_category " onclick="openCategory()">

                        <div className="item_box ">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <div className="item_content">
                            <p>Danh mục</p>
                        </div>
                    </div>

                    <div className="header_search">
                        <button type="submit" className="search_box search_box_color">
                            <i className="fa-solid fa-magnifying-glass"></i>

                        </button>

                        <input type="text" className="search_input " placeholder="Bạn tìm gì..." />


                    </div>



                    <Link to="cart.html" target="_blank" className="header_item">
                        <div className="item_box ">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className="item_content">
                            <p>Giỏ hàng</p>
                        </div>
                    </Link>

                    <Link to="login.html" target="_blank" className="header_item">

                        <div className="item_box ">
                            <i className="fa-regular fa-user color-while"></i>
                        </div>
                        <div className="item_content">
                            <p>Đăng nhập</p>
                        </div>

                    </Link>
                    <Link to="storeAddress.html" target="_blank" className="header_address ">
                        <div className="address_alpha">
                            <div className="item_box ">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="item_content">
                                <p>Tp. Hồ Chí Minh</p>
                            </div>
                        </div>

                        <div className="item_box address_beta ">
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </Link>


                </div>
            </div>

        </>
    )
}


export default HeaderComp;



