import { Navigate, useNavigate } from "react-router-dom";
import priceAfter from "../../services/GetDiscountPrice";


const ProductCard = ({ product }) => {

    const navigate = useNavigate();
    const goToProDetail = (id) => {

        navigate("/product/" + id);
    }

    return (
        <div className="product_card" onClick={() => goToProDetail(product.productID)}>
            <div className="card_image">
                <img src={product.img} alt="product" />
            </div>

            <div className="card_title">
                <h4>{product.name}</h4>
            </div>

            <p className="card_price-show">
                {priceAfter(product.price, product.discountDefault).toLocaleString('vi-VN')} đ
            </p>

            <div className="card_price-discount">
                <p className="card_price-through">{product.price.toLocaleString('vi-VN')} đ</p>
                <b>-10%</b>
            </div>

            <div className="card_bottom">
                <div className="card_vote">
                    <i className="fa-solid fa-star"></i>
                    <p className="margin-right">4.2</p>
                    <p>({product.quanlitySell})</p>
                </div>
                <div className="card_add-cart">
                    <i className="fa-solid fa-cart-arrow-down"></i>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
