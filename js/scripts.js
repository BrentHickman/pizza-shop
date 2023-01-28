let myOrder = new Order();
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
  finalPrice *= this.qty;
  this.price = finalPrice;
  return finalPrice;
}

Pizza.prototype.choseQty = function(qty) {
  this.qty = qty;
}


///////////////////

function Order() {
  this.pizzas = {};
  this.id = 0;
}

Order.prototype.assignId = function() {
  this.id += 1;
  return this.id;
};

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
}


//ui logic -----------




window.addEventListener("load", function(){
  document.getElementById("orderForm").addEventListener("submit", onSubmit);
});

function onSubmit(event){
  event.preventDefault();
  let toppingArray = [];
  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  for (i = 0; i < checkboxes.length; i++) {
    toppingArray.push(checkboxes[i].value)
  }
  let sizeChoice = document.querySelector("input[type=radio]:checked").value;
  let sizeToNum = parseInt(sizeChoice);

  let newOrder = new Pizza(
      sizeToNum,
      toppingArray,
      document.getElementById("qty").value,
      );
      
  myOrder.addPizza(newOrder);
  newOrder.calcPrice(myOrder.Id);
  console.log(newOrder.price);
};
