

const priceAfter = (originalPrice, discountPercent) => {
    const discountAmount = (originalPrice * discountPercent) / 100;
    return originalPrice - discountAmount;
}
export default priceAfter


function goToProDetail(id) {


    var url = "detailProduct?id=" + id;
    window.location.href = url;


}
