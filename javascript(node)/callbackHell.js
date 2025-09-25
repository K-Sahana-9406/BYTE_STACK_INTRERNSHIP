// 🔹 1. What is Callback Hell?

// Callback hell happens when you use too many nested callbacks (functions inside functions inside functions).

// The code becomes:

// Hard to read

// Hard to debug

// Hard to maintain

// It looks like a "pyramid of doom" → >>>> shape.

// 🔹 2. Simple Example

// Suppose you want to:

// Get user data

// Get user’s orders

// Get order details

// Using callbacks, it looks like this:

getUser(1, function(user) {
  console.log("User:", user);
  getOrders(user.id, function(orders) {
    console.log("Orders:", orders);
    getOrderDetails(orders[0], function(details) {
      console.log("Order details:", details);
      getShipping(details.id, function(shipping) {
        console.log("Shipping info:", shipping);
      });
    });
  });
});

function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "Sahana" });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    callback(["order1", "order2", "order3"]);
  }, 1000);
}

function getOrderDetails(orderId, callback) {
  setTimeout(() => {
    callback({ id: orderId, product: "Laptop", price: 50000 });
  }, 1000);
}

function getShipping(orderId, callback) {
  setTimeout(() => {
    callback({ id: orderId, status: "Shipped", date: "2025-09-25" });
  }, 1000);
}
