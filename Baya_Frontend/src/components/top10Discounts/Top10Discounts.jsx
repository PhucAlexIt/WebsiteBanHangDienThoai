
import { useEffect, useState } from "react"
import instandURL from "../../services/ApiConFig";
import ProductCard from "../card/ProductCard";
import "../../assets/css/pages/home.css"

const BlockTop10Discounts = () => {
    const [topDiscounts, setTopDiscounts] = useState([])
    // console.log(instandURL + '/getTop10Sell')

    useEffect(() => {
        fetch(instandURL + '/getTop10Discounts')
            .then(response => response.json())
            .then(data => {
                console.log("data nhận về top discount", data)
                setTopDiscounts(data);
            })
            .catch(error => {
                alert("da xay ra loi loading")

            });
    }, []);
    return (
        <>
            <div className="block_sale">
                <div className="sale_title">
                    <div className="title-alpha">
                        <img src="https://cdn2.cellphones.com.vn/x/media/catalog/product/b/f/bf2024__title_flashsale.png" alt="banner" />
                    </div>

                </div>
                <div className="product_list">

                    {topDiscounts.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}

                </div>

            </div>
        </>
    )


}
export default BlockTop10Discounts