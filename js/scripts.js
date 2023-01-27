const myPizza = new Pizza();

//business logic -----------

///////////////////

function Pizza(size, qty) {
  this.size = size;
  this.toppings = [];
  this.qty = qty;
  this.id = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
};

Pizza.prototype.choseSize = function(size) {
  this.size = size;
};

Pizza.prototype.choseQty = function(qty) {
  this.qty = qty;
}

Pizza.prototype.assignId = function() {
  this.id += 1;
  return this.id;
};
///////////////////

function Order(name) {
  this.pizzas = {};
  this.name = name
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.id] = pizza;
}






//ui logic -----------