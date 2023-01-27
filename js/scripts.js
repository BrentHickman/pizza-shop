///////////////////

function Pizza() {
  this.size = "";
  this.toppings = [];
  this.qty = 0;
}

///////////////////

function Order(orderNumber) {
  this.orderNumber = orderNumber;
  this.pizza = [];
}
// Order.prototype.addPizza = function(orderNumber){
//   this.pizza.push(orderNumber);
// }
