
const product = {
    name: "Lapto",
    bulkPricing: [
        {
           minQuantity: 10,
            pricePerUnit: 100,
            maxQuantity: 19,
        },
        {
            minQuantity: 20,
            pricePerUnit: 50,
            maxQuantity: 29,
        },
    ],
};

function calculateTotalPrice(quantityPurchased) {
    const pricingModelPruchased = product.bulkPricing.find((pricing) => {
        return (quantityPurchased >= pricing.minQuantity && quantityPurchased <= pricing.maxQuantity); 
    });
    return quantityPurchased * pricingModelPruchased.pricePerUnit;

}
    

// console.log(calculateTotalPrice(5)) // 500
console.log(calculateTotalPrice(10)) // 1000
console.log(calculateTotalPrice(15)) // 1500
console.log(calculateTotalPrice(20)) //1000
console.log(calculateTotalPrice(25)) //1250
