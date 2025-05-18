import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/card/ProductCard"
import { useEffect, useState } from "react";
import instandURL from "../services/ApiConFig"

const SearchPage = () => {

    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState("");
    const query = searchParams.get("query");


    useEffect(() => {
        setMessage("");
        setProducts([]);

        // 2.1.3.   SearchPage gửi yêu cầu đến SearchController kèm theo keyword
        fetch(`${instandURL}/search?query=${encodeURIComponent(query)}`)
            .then((res) => {
                // 2.2.2.3. SearchPage nhận và nhận thấy không có sản phẩm nào được trả về, nên hiển thị thông báo trên giao diện: “Không tìm thấy sản phẩm phù hợp.”
                if (res.status === 204) {
                    setMessage("Không tìm thấy sản phẩm phù hợp.")
                    return [];
                }

                if (!res.ok) {
                    throw new Error("Đã xảy ra lỗi khi tìm kiếm.");
                }

                return res.json(); // 2.1.10.	SearchPage nhận dữ liệu
            })
            .then((data) => {
                setProducts(data)
            })
            .catch((err) => {
                console.error("Lỗi fetch:", err.message);
            });
    }, [query]);

    return (
        <>
            <div className="block_product bg-while">
                <div className="filter-bar">
                    <div className="filter-options">
                        <button className="filter-button"><i className="fa-solid fa-filter"></i>
                            Tất cả sản phẩm
                        </button>

                    </div>

                    <div className="sort-options">
                        <span>Sắp xếp theo:</span>
                        <button className="sort-button active">Nổi bật</button>
                        <button className="sort-button">Bán chạy</button>
                        <button className="sort-button">Giảm giá</button>
                        <button className="sort-button">Mới</button>
                        <button className="sort-button btn_hover-price">
                            <p> Giá </p>
                            <ul>
                                <li>Từ cao đến thấp</li>
                                <li>Từ thấp đến cao</li>
                            </ul>

                        </button>
                        <div>

                        </div>
                    </div>
                </div>

                {/* 2.2.2.3. SearchPage nhận và nhận thấy không có sản phẩm nào được trả về, nên hiển thị thông báo trên giao diện: “Không tìm thấy sản phẩm phù hợp.” */}
                {message && <p style={{color: "red", marginBottom: "10px", marginLeft: "15px"}}>{message}</p>}

                <div className="product_list sale_list">
                    {/* 2.1.10.	SearchPage hiển thị danh sách sản phẩm trên giao diện */}
                    {products.map(product => (
                        <ProductCard
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SearchPage