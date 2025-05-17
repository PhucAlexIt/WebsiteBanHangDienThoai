

const SpecificationComp = (props) => {
    return (
        <>
            <div className="product_content alpha bg-while">

                <div className="content_name ">
                    <h3 onclick="showContent(1)">Thông số kĩ thuật</h3>
                    <h3 onclick="showContent(2)">Bài viết đánh giá</h3>





                </div>
                <div className="content_blog " id="content_blog">

                    <div className="content_blog-item">


                        <button className="item-name" onclick="clickContentItem()">
                            <h3>Tổng quan</h3> <i className="fa-solid fa-chevron-right fa-rotate-90"></i>
                        </button>
                        <div className="item-main">
                            <ul>
                                <li>
                                    <h3>Tên sản phẩm: </h3>
                                    <p> {props.name}</p>
                                </li>
                                <li>
                                    <h3>Hãng sản xuất: </h3>
                                    <p> {props.category}</p>
                                </li>
                                <li>
                                    <h3>Tiện ích: </h3>
                                    <p> Kháng nước, kháng bụi, Độ bền chuẩn quân đội</p>
                                </li>
                                <li>
                                    <h3>Kết nối: </h3>
                                    <p> Hỗ trợ kết nối 4G. SIM: 2 Nano SIM. </p>
                                </li>
                                <li>
                                    <h3>Thiết kế: </h3>
                                    <p> Nguyên khối. Chuẩn kháng nước IP68</p>
                                </li>
                                <li>
                                    <h3>Thời điểm ra mắt: </h3>
                                    <p> {props.createAt}</p>
                                </li>
                            </ul>
                        </div>


                    </div>

                </div>
                <div className="content_blog-rating remove" id="content_blog-rating">
                    <p> {props.description}
                    </p>
                </div>

            </div>

        </>
    )

}
export default SpecificationComp;
