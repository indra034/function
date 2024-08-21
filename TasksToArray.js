
const cart = [
    {
      productName: "Churiya",
      quantity: 3,
      pricePerUnit: 0.75
    },
    {
      productName: "Jutta",
      quantity: 2,
      pricePerUnit: 1.5
    }, 
    { productName: "Topi",
      quantity: 2,
      pricePerUnit: 2.7
    }, 
    { productName: "Ganji",
      quantity: 2,
      pricePerUnit: 0.75
    }
  ];
  function calculateTotalCost(cart) {
    return cart.reduce((total, item) => {
      return total + (item.quantity * item.pricePerUnit);
    }, 0);
  }
  
  // Example usage
  const totalCost = calculateTotalCost(cart);
  console.log("Total Cost:", totalCost);
