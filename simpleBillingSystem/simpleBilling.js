let numberofCustomers = Number(prompt("Enter the number of customers : "));

for (let i = 1; i <= numberofCustomers; i++) {
    console.log("\nCustomer", i);
    let numberOfProducts = Number(prompt(`How many products for customer ${i} ?`));
    let totalBill = 0;
    let mostExpensiveProduct = "";
    let highestPrice = 0;

    for (let j = 1; j <= numberOfProducts; j++) {
        const productName = prompt("Enter the product name : ");
        const quantity = Number(prompt("Enter the quantity : "));
        const price = Number(prompt("Enter price of one piece : "));
        totalBill += quantity * price;
        if (price > highestPrice) {
            highestPrice = price;
            mostExpensiveProduct = productName;
        }
    }
    let discountedPrice = totalBill;
    if (totalBill >= 1000) {
        discountedPrice = totalBill - (0.1 * totalBill);
        console.log("You got a 10% discount 🤩");
    }

    let gst = discountedPrice * 0.18;
    let finalBill = discountedPrice + gst;

    console.log(`\n==========Bill for Customer ${i} ==========`);
    console.log("Total Bill       :", totalBill);
    console.log("After Discount   :", discountedPrice);
    console.log("GST (18%)        :", gst);
    console.log("Final Bill       :", finalBill);
    console.log("Most Expensive Product :", mostExpensiveProduct," ", highestPrice);
    console.log("==========================");

    const paymentType = prompt("How would you like to pay? Cash/UPI/Card").toLowerCase();

    switch (paymentType) {
        case "cash":
            console.log("You selected payment by Cash 💵");
            break;

        case "upi":
            console.log("You selected payment by UPI 📱");
            break;

        case "card":
            console.log("You selected payment by Card 💳");
            break;

        default:
            console.log("Invalid payment option");
    }
}


