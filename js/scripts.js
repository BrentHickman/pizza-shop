const myPizza = new Pizza(1,["cheese", "pepperoni"], 1);

//business logic -----------

///////////////////

function Pizza(size, toppings, qty) {
  this.size = size;
  this.toppings = toppings;
  this.qty = qty;
  this.id = 0;
  this.price = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
};
//small = 1 med = 2 large = 3
Pizza.prototype.choseSize = function(size) {
  if (size !==1 || size !==2 || size !== 3){
    return false;
  }
  this.size = size;
  return true;
};

Pizza.prototype.calcPrice = function() {
  let finalPrice = 10;
  let sizePrice = this.size;
  let toppingsPrice = this.toppings.length;

  finalPrice += sizePrice;
  finalPrice += toppingsPrice;
  this.Price = finalPrice;
  return finalPrice;
}

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