
import priceAfter from "../../services/GetDiscountPrice";
const PriceDetail = (props) => {
    return (
        <>
            <div className="block_right omega bg-while">
                <a className="banner_sale " href="https://zalo.me/0869380447" target="_blank">
                    <img src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/79/61/796197adf9f0c2d5cadb6a2c2679358a.png" alt="banner" />
                </a>
                <div className="block_price">
                    <p className="price-present">{priceAfter(props.price, props.discountDefault).toLocaleString('vi-VN')} <sup>đ</sup></p>
                    <p className="price-old">{props.price.toLocaleString('vi-VN')} <sup>đ</sup></p>
                    <p className="price-percent">-25%</p>


                </div>
                <div className="block_promotion">
                    <div className="promotion_name">
                        <p>Khuyến mãi</p>
                        <p>Giá và khuyến mãi dự kiến áp dụng đến 23:59 | 30/11</p>
                    </div>
                    <div className="promotion_item">
                        <div className="item_content">
                            <i className="fa-solid fa-circle"></i>
                            <p>Nhập mã SOFAFT200 giảm lên đến 200,000đ (áp dụng cho các sản phẩm thuộc
                                SOFA)</p>
                        </div>
                    </div>
                    <div className="promotion_item">
                        <div className="item_content">
                            <i className="fa-solid fa-circle"></i>
                            <p>Nhập mã XMAS10 để nhận ưu đãi giảm giá lên đến 20% nhân dịp Giáng Sinh!</p>
                        </div>
                    </div>
                    <div className="promotion_item">
                        <div className="item_content">
                            <i className="fa-solid fa-circle"></i>
                            <p>Nhập mã TET20 để nhận ưu đãi giảm giá lên đến 20% chào đón Tết Nguyên Đán! </p>
                        </div>
                    </div>

                </div>
                <div className="block_buy">
                    <a className="btn_add-cart buy_now" href="cart.html">
                        <i className="fa-solid fa-cart-plus"></i>
                        <p>Thêm vào giỏ hàng</p>
                    </a>
                    <a className="btn_buynow buy_now" href="form_checkout.html" target="_blank">
                        <p>Mua Ngay</p>
                    </a>
                </div>
                <div className="block_call">
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:0869380448">0869 380 448</a>
                    <p>(8:00 - 21:30)</p>
                </div>
                <div className="block_store">
                    <i className="fa-solid fa-shop"></i>
                    <a href="storeAddress.html">Xem các cửa hàng của Baya</a>
                </div>

            </div>
        </>
    )
}
export default PriceDetail