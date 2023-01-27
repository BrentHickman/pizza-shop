

function Pizza(orderNumber) {
  this.orderNumber = orderNumber;
  this.size = "";
  this.toppings = [];
  this.qty = 0;
}

///////////////////

function Order() {
  this.pizza = [];
}
