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



        fetch(instandURL + `/search?query=${query}`)
            .then((res) => {
                if (res.status === 404) {
                    console.log("loi 404")
                    setMessage("Vui lòng nhập từ khóa tìm kiếm.")

                }
                if (res.status === 204) {
                    setMessage("Không tìm thấy sản phẩm nào")
                    return [];
                }
                if (!res.ok) {
                    throw new Error("Đã xảy ra lỗi khi tìm kiếm.");
                }
                return res.json();
            })
            .then((data) => {
                console.log("Kết quả:", data);
                setProducts(data)

                // if (data) {
                //     console.log("Kết quả:", data);
                //     // setProducts(data); // nếu bạn dùng state
                // } else {
                //     // setProducts([]);
                //     console.log("Không tìm thấy sản phẩm");
                // }
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
                        <button className="filter-button"> <i className="fa-solid fa-filter"></i>
                            Tất cả sản phẩm</button>

                    </div>

                    <div className="sort-options">
                        <span>Sắp xếp theo:</span>
                        <button className="sort-button active">Nổi bật</button>
                        <button className="sort-button">Bán chạy</button>
                        <button className="sort-button">Giảm giá</button>
                        <button className="sort-button">Mới</button>
                        <button className="sort-button btn_hover-price">
                            <p>Giá </p>
                            <ul>
                                <li>Từ cao đến thấp</li>
                                <li>Từ thấp đến cao</li>
                            </ul>

                        </button>
                        <div>

                        </div>
                    </div>
                </div>

                <div className="product_list sale_list">
                    {message && <p style={{ color: "red", marginBottom: "10px" }}>{message}</p>}

                    {products.map(product => (
                        <ProductCard
                            product={product}
                        />
                    ))}



                </div>


                {/* <div className="see_more-product">
                    <div className="fui-basic-pagination">
                        <ul className="pagination-list">
                            <li className="pagination-item btn-prev">
                                <a href="#" className="pagination-link">
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20711 0.792893C5.59763 1.18342 5.59763 1.81658 5.20711 2.20711L2.41421 5L5.20711 7.79289C5.59763 8.18342 5.59763 8.81658 5.20711 9.20711C4.81658 9.59763 4.18342 9.59763 3.79289 9.20711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289L3.79289 0.792893C4.18342 0.402369 4.81658 0.402369 5.20711 0.792893Z" fill="currentColor"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="pagination-item">
                                <a href="#" className="pagination-link">1</a>
                            </li>
                            <li className="pagination-item">
                                <a href="#" className="pagination-link selected">
                                    2
                                </a>
                            </li>
                            <li className="pagination-item">
                                <a href="#" className="pagination-link">3</a>
                            </li>
                            <li className="pagination-item">
                                <a href="#" className="pagination-link">4</a>
                            </li>
                            <li className="pagination-item">
                                <a href="#" className="pagination-link">5</a>
                            </li>
                            <li className="pagination-item btn-next">
                                <a href="#" className="pagination-link">
                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.792893 0.792893C0.402369 1.18342 0.402369 1.81658 0.792893 2.20711L3.58579 5L0.792893 7.79289C0.402369 8.18342 0.402369 8.81658 0.792893 9.20711C1.18342 9.59763 1.81658 9.59763 2.20711 9.20711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792893 0.792893Z" fill="currentColor"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default SearchPage