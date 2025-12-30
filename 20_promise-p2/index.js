const cart = ["shoes", "pants", "kurtas"];

createOrder(cart, function(orderId) {
    proceedToPayment(orderId);
})