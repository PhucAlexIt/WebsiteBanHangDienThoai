import { useEffect, useState } from "react"
import instandURL from "../../services/ApiConFig";



const Top10Sell = () => {
    const [topSell, setTopSell] = useState([])
    console.log(instandURL + '/getTop10Sell')
    useEffect(() => {
        fetch(instandURL + '/getTop10Sell')
            .then(response => response.json())
            .then(data => {
                console.log("data nhận về", data)
                setTopSell(data); // Giả sử API trả về một mảng sản phẩm

            })
            .catch(error => {


            });
    }, []);


    return (
        <>


        </>
    )




}
export default Top10Sell