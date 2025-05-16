import { Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

const HeaderComp = () => {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://localhost:8080/search?keyword=${keyword}`);
            setResults(response.data);
        } catch (error) {
            console.error("Lỗi khi tìm kiếm:", error);
        }
    };

    return (
        <>
            <div className="header">
                <div className="header_main">

                    <div className="header_logo">
                        <Link to="/"><img src="./src/assets/images/logo/logo-final (3) (1).png" alt="logo" /> </Link>
                    </div>
                    <div to="" className="header_item item_category " onclick="openCategory()">

                        <div className="item_box ">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <div className="item_content">
                            <p>Danh mục</p>
                        </div>
                    </div>

                    {/*<div className="header_search">*/}
                    {/*    <button type="submit" className="search_box search_box_color">*/}
                    {/*        <i className="fa-solid fa-magnifying-glass"></i>*/}
                    {/*    </button>*/}
                    {/*    <input type="text" className="search_input " placeholder="Bạn tìm gì..." />*/}
                    {/*</div>*/}

                    <form className="header_search" onSubmit={handleSearch}>
                        <button type="submit" className="search_box search_box_color">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <input type="text" className="search_input" placeholder="Bạn tìm gì..." value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                    </form>



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

            {/* Danh sách kết quả hiển thị tạm dưới header */}
            <div className="search_results" style={{ padding: "10px 20px", background: "#f9f9f9"}}>
                {results.length > 0 && (
                    <ul>
                        {results.map((product) => (
                            <li key={product.id}>
                                <strong>{product.name}</strong> - {product.price}đ
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}


export default HeaderComp;



