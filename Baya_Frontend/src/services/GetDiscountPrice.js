

const priceAfter = (originalPrice, discountPercent) => {
    const discountAmount = (originalPrice * discountPercent) / 100;
    return originalPrice - discountAmount;
}
export default priceAfter


