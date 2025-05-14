import { useEffect, useState } from "react"
import instandURL from "../../services/ApiConFig";
import ProductCard from "../card/ProductCard";
import "../../assets/css/pages/home.css"


const Top10Sell = () => {
    const [topSell, setTopSell] = useState([])
    console.log(instandURL + '/getTop10Sell')

    useEffect(() => {
        fetch(instandURL + '/getTop10Sell')
            .then(response => response.json())
            .then(data => {

                setTopSell(data);
            })
            .catch(error => {
                alert("da xay ra loi loading")

            });
    }, []);


    return (
        <>


            <div className="block_product bg-while">
                <div className="product_list_title">
                    <h3>Sản phẩm bán chạy nhất</h3>


                </div>
                <div className="product_list sale_list">
                    {topSell.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}

                </div>

            </div>


        </>
    )




}
export default Top10Sell