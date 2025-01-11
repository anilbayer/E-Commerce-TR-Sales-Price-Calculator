function calculate() {
    const purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    const exchangeRate = parseFloat(document.getElementById("exchangeRate").value);
    const commissionRate = parseFloat(document.getElementById("commission").value);
    const shippingCost = parseFloat(document.getElementById("shippingCompany").value);

    // Display the shipping cost selected
    document.getElementById("shippingCostDisplay").innerText = shippingCost.toFixed(2);

    // Total Cost Formula:
    const totalCostBase = (purchasePrice * exchangeRate) + shippingCost + 10;
    const totalCost = totalCostBase + ((totalCostBase + ((totalCostBase * 50) / 100) * commissionRate) / 100);
    document.getElementById("totalCost").innerText = totalCost.toFixed(2);

    // Estimated Sale Price Formula:
    const salePriceBase = ((totalCostBase * 50) / 100);
    const estimatedSalePrice = totalCostBase + salePriceBase + (((totalCostBase + salePriceBase) * 20 )/100) + (( salePriceBase * commissionRate) /100);
    document.getElementById("salePrice").innerText = estimatedSalePrice.toFixed(2);

    // Estimated Commission Formula:
    const estimatedCommission = (estimatedSalePrice * commissionRate) / 100;
    document.getElementById("estimatedCommission").innerText = estimatedCommission.toFixed(2);
    
     // VAT Amount Formula:
    const vatAmount = (estimatedSalePrice * 20) / 100;
    document.getElementById("vat").innerText = vatAmount.toFixed(2);
    
    // Estimated Profit Formula:
    const estimatedProfit = estimatedSalePrice - (purchasePrice * exchangeRate) - estimatedCommission - shippingCost;
    document.getElementById("profit").innerText = estimatedProfit.toFixed(2);
    
    // Estimated Profit after VAT Formula:
    const estimatedProfitVAT = estimatedProfit - vatAmount;
    document.getElementById("profitvat").innerText = estimatedProfitVAT.toFixed(2);
    
}