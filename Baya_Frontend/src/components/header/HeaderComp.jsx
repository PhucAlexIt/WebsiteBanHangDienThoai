
import {Link, useNavigate} from "react-router-dom"
import {useState} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const HeaderComp = () => {
    const navigate = useNavigate();

    // 2.2.0.2. Tại trang đó sẽ kiểm tra nội dung người dùng nhập vào và hiển thị thông báo cho người dùng: “Vui lòng nhập từ khóa tìm kiếm!”
    // 2.2.1.2. Tại trang đó sẽ kiểm tra nội dung người dùng nhập vào và hiển thị thông báo cho người dùng: “Từ khoá chứa ký tự không hợp lệ!”
    const [keyword, setKeyword] = useState("");
    const validateKeyword = (kw) => {
        const trimmed = kw.trim();
        if (!trimmed) {
            return { valid: false, message: "Vui lòng nhập từ khóa tìm kiếm!" };
        }
        const invalidChars = /[<>{}\\[\]]|[^\p{L}\p{N}\s]/u;
        if (invalidChars.test(trimmed)) {
            return { valid: false, message: "Từ khóa chứa ký tự không hợp lệ!" };
        }
        return { valid: true };
    };

    // Search Function
    // 2.1.2.   Hệ thống chuyển hướng đến SearchPage
    const handleSearch = async () => {
        const validation = validateKeyword(keyword);
        if (!validation.valid) {
            toast.error(validation.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
            return;
        }

        try {
            const response = await fetch(`/search?query=${encodeURIComponent(keyword)}`);
            if (!response.ok) {
                throw new Error("Lỗi khi tìm kiếm sản phẩm!");
            }
            navigate(`/search?query=${encodeURIComponent(keyword)}`);
        } catch (error) {
            toast.error(error.message || "Đã có lỗi xảy ra, vui lòng thử lại!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="header">
                <div className="header_main">

                    <div className="header_logo">
                        <Link to="/"><img src="./src/assets/images/logo/logo-final (3) (1).png" alt="logo"/> </Link>
                    </div>
                    <div to="/admin" className="header_item item_category " onclick="openCategory()">

                        <div className="item_box ">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <div className="item_content">
                            <p>Admin</p>
                        </div>
                    </div>

                    <div className="header_search">
                        {/* 2.1.1.  người dùng nhấn biểu tượng "Kính lúp" */}
                        {/* 2.2.0.1. Người dùng nhấn biểu tượng "Kính lúp" */}
                        {/* 2.2.1.1. Người dùng nhấn biểu tượng "Kính lúp" */}
                        <div type="submit" className="search_box search_box_color" onClick={handleSearch}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                        {/* 2.1.0.  Người dùng nhập từ khoá vào ô tìm kiếm */}
                        {/* 2.2.0.0. Người dùng để ô tìm kiếm trống không có ký tự nào được nhập hoặc nhập toàn khoảng trắng (nút space) */}
                        {/* 2.2.1.0. Người dùng nhập vào ô  tìm kiếm các ký tự không hợp lệ */}
                        <input type="text" className="search_input " placeholder="Bạn tìm gì..."
                               value={keyword}
                               onChange={(e) => setKeyword(e.target.value)}
                               onKeyPress={handleKeyPress}
                        />
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
                    <Link to="/store-address" target="_blank" className="header_address ">
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



