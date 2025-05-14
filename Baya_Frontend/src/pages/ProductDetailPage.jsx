import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instandURL from "../services/ApiConFig"
import "../assets/css/pages/productDetail.css"
import ImgDetail from "../components/productDetailComponents/ImgDetail";
import PolicyDetail from "../components/productDetailComponents/PolicyDetail";
import SpecificationComp from "../components/productDetailComponents/SpecificationComp";
import PriceDetail from "../components/productDetailComponents/PriceDetail";



const ProductDetailPage = () => {
    const { id } = useParams();
    console.log("id là ", id); // Log để debug
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(instandURL + '/product/' + id)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Không thể lấy dữ liệu sản phẩm");
                }
                return response.json();
            })
            .then(data => {
                console.log("data product detail", data);
                setProduct(data);
            })
            .catch(error => {
                console.error("Error fetching product:", error);
            });
    }, [id]);

    return (
        <>
            <div className="breadcrumb">
                <ul>
                    <li><a href="">Điện thoại</a></li>
                    <li>/</li>
                    <li><a href="">{product ? (
                        <h1>{product.categoryID.name}</h1>
                    ) : (
                        <h1>Loading</h1>
                    )}</a></li>
                </ul>
            </div>
            <div className="product_name">
                {product ? (
                    <h1>{product.name}</h1>
                ) : (
                    <h1>Loading</h1>
                )}
            </div>
            <div className="product_detail">
                <div className="left">
                    <ImgDetail
                        img={product ? (product.img) : ("")}
                    />
                    <PolicyDetail />
                    <SpecificationComp
                        name={product ? (product.name) : ("")}
                        categoryID={product ? (product.categoryID.name) : ("")}
                        createAt={product ? (product.createAt) : ("")}


                    />
                </div>
                <PriceDetail
                    price={product ? (product.price) : ("")}
                    discountDefault={product ? (product.discountDefault) : ("")}

                />
            </div>


        </>
    );
};

export default ProductDetailPage
