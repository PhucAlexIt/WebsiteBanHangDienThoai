import "../assets/css/pages/productDetail.css"
import "../assets/css/pages/productSearch.css"
import "../assets/css/pages/storeMap.css"
import "../assets/css/pages/article.css"

const StoreAddress = () => {
    return (
        <>
            <div className="article_page">


                <div className="article_alpha bg-while store-alpha">
                    <div className="store_address">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108576.81174657971!2d106.6037042771911!3d10.7236097633709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a7e0d52e65%3A0x68d98161109b3397!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gTuG7mWkgVGjhuqV0IEJheWE!5e0!3m2!1svi!2s!4v1732612353356!5m2!1svi!2s"
                            width="600"
                            height="450"
                            style={{ border: '0px' }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="store_content">
                        <p><img src="https://cdn.tgdd.vn/Products/Images/42/58003/tick.png" alt="" />Nhân viên niềm nở đón
                            tiếp khách hàng từ cửa chính của siêu thị</p>
                        <p><img src="https://cdn.tgdd.vn/Products/Images/42/58003/tick.png" alt="" />Cam kết hàng hoá
                            chính hãng 100%, cập nhật mới nhất trên thị trường, đa dạng các mặt hàng
                        </p>
                        <p><img src="https://cdn.tgdd.vn/Products/Images/42/58003/tick.png" alt="" />Chuyên viên tư vấn
                            sản phẩm nhiều kinh nghiệm, được đào tạo bài bản, phục vụ nhiệt tình và tận tâm.</p>
                        <p><img src="https://cdn.tgdd.vn/Products/Images/42/58003/tick.png" alt="" />Giá cả tốt nhất trong
                            khu vực, luôn có chương trình khuyến mãi, ưu đãi cho khách hàng.</p>
                        <p><img src="https://cdn.tgdd.vn/Products/Images/42/58003/tick.png" alt="" />Nơi để xe tiện lợi
                            trước siêu thị với đội ngũ bảo vệ phục vục tận tình dẫn xe cho khách hàng, quý khách chỉ cần
                            bật chống xe và lấy thẻ các khâu còn lại nhân viên bảo vệ của chúng tôi sẽ phục vụ bạn.</p>
                        <p><img src="https://cdn.tgdd.vn/Products/Images/42/58003/tick.png" alt="" />Với mục tiêu lấy
                            khách hàng làm trọng tâm, <b>Siêu thị Nội thất BAYA</b>
                            mong muốn mang lại sản phẩm phù hợp với nhu cầu khách hàng, giá cả tốt nhất và dịch vụ
                            khách hàng hoàn hảo.</p>

                    </div>



                </div>

                <div className="article_beta bg-while store-beta">
                    <img src="https://cafefcdn.com/zoom/700_438/2020/2020-photo-1-15820969889581758994248-31-0-893-1379-crop-1582097078195-637177298987352500.jpg" alt="store" />

                    <div className="store_item">
                        <h5>Nội thất Baya</h5>
                    </div>
                    <div className="store_item">
                        <b>Địa chỉ cửa hàng: </b>
                        673 Điện Biên Phủ, Khu phố 2, Bình Thạnh, Hồ Chí Minh 70000
                    </div>
                    <div className="store_item">
                        <b>Thời gian hoạt động: </b>
                        8 giờ - 21 giờ (kể cả CN và ngày lễ)
                    </div>

                    <div className="store_item">
                        <b>Số điện thoại: </b>
                        <p><a href="tel:0869380447">0869 380 448</a></p>
                    </div>
                </div>

            </div>


        </>

    )


}


export default StoreAddress