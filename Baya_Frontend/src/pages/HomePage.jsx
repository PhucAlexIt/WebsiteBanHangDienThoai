import BannerComp from "../components/banner/Banner"
import Top10Sell from "../components/top10ProductSell/Top10Sell"
import BlockTop10Discounts from "../components/top10Discounts/Top10Discounts"



const HomePage = () => {
    return (
        <>
            <BannerComp />
            <BlockTop10Discounts />
            <Top10Sell />

        </>

    )


}
export default HomePage