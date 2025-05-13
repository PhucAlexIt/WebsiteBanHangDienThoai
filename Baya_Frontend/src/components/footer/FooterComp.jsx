


const FooterComp = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-top">
                    <div className="newsletter">
                        <p>Đăng ký nhận tin</p>
                        <div className="newsletter-input">
                            <input type="email" placeholder="Nhập email của bạn" />
                            <button>ĐĂNG KÝ</button>
                        </div>

                    </div>
                    <div className="social">
                        <p>Kết nối với chúng tôi</p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>CÔNG TY NỘI THẤT BAYA</h3>
                        <ul>

                            <li>Thương hiệu nội thất và trang trí hàng đầu Việt Nam, góp phần xây dựng thêm nhiều tổ ấm mỗi
                                ngày.
                            </li>
                            <li><i className="fa-solid fa-location-dot"></i> Tầng 08, Tòa nhà Pearl Plaza, Số 561A
                                Điện Biên
                                Phủ,
                                Phường 25, Quận Bình Thạnh, Thành phố Hồ
                                Chí Minh </li>
                            <li><i className="fa-solid fa-phone"></i> 1900 63 64 76</li>
                            <li><i className="fa-solid fa-envelope"></i> webshop@baya.vn</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>VỀ BAYA</h3>
                        <ul>
                            <li><a href="#"><i className="fa-solid fa-circle icon-small"></i>Giới thiệu</a></li>
                            <li><a href="#"><i className="fa-solid fa-circle icon-small"></i>Liên hệ</a></li>
                            <li><a href="#"><i className="fa-solid fa-circle icon-small"></i>Blog</a></li>
                            <li><a href="#"><i className="fa-solid fa-circle icon-small"></i>Hệ thống cửa hàng</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>HỖ TRỢ KHÁCH HÀNG</h3>
                        <ul>
                            <li><a href="#"><i className="fa-solid fa-circle icon-small"></i>Câu hỏi thường gặp</a></li>
                            <li><a href="#"><i className="fa-solid fa-circle icon-small"></i>Hướng dẫn đặt hàng</a></li>
                            <li><a href="#"><i className="fa-solid fa-circle icon-small"></i>Mua hàng trả góp</a></li>
                            <li><a href="#"><i className="fa-solid fa-circle icon-small"></i>Hướng dẫn thanh toán VNPAY-QR</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>CÁC THÔNG TIN KHÁC</h3>
                        <ul>
                            <li><a href="#"><i className="fa-solid fa-circle icon-small "></i>Tin mới nhất</a></li>


                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2024 Baya. Powered by Nhóm 1</p>
                </div>
            </div>

        </>

    )
}


export default FooterComp