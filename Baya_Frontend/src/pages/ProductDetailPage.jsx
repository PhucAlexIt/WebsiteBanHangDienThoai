import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instandURL from "../services/ApiConFig"



const ProductDetailPage = () => {
    const { id } = useParams();
    // console.log("id là ", id)
    const [product, setProduct] = useState("")
    useEffect(() => {
        fetch(instandURL + '/product/' + id)
            .then(response => response.json())
            .then(data => {
                console.log("data product detail", data)

                setProduct(data);
            })
            .catch(error => {


            });
    }, []);




    return (
        <>
            <div>trang detail</div>

        </>
    )
}
export default ProductDetailPage
