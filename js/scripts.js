const myPizza = new Pizza();
///////////////////

function Pizza(size, qty) {
  this.size = size;
  this.toppings = [];
  this.qty = qty;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
};

///////////////////

function Order(orderNumber) {
  this.orderNumber = orderNumber;
  this.pizzas = {};
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.size] = pizza;
}