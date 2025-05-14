
const ProductCard = (product) => {
    return (
        <>
            <div className="product_card" onclick="goToProDetail()">
                <div className="card_image">
                    <img src={product.img} alt="product" />
                </div>
                <div className="card_tilte">
                    <h4>{product.tiltle}</h4>
                </div>

                <p className="card_price-show">1.900.000đ</p>

                <div className="card_price-discount">
                    <p className="card_price-through">2.400.000đ</p>
                    <b>-10%</b>
                </div>


                <div className="card_bottom">
                    <div className="card_vote">
                        <i className="fa-solid fa-star"></i>
                        <p className="magin-right">4.2</p>
                        <p>(
                        </p><p>{product.quanlitySell}</p>)<p></p>

                    </div>
                    <div className="card_add-cart">
                        <i className="fa-solid fa-cart-arrow-down">

                        </i>

                    </div>

                </div>

            </div>

        </>

    )


}
export default ProductCard


