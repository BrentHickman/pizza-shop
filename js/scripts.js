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

function showOrder(){
  let sizetoTranslate = myOrder.pizzas[1].size;
  let translatedSize = "";
  let sizeTranslate = function(sizetoTranslate){
    if (sizetoTranslate ==1){
      let translatedSize = "Small";
      return translatedSize;
    }
    else if (sizetoTranslate ==2){
      let translatedSize = "Medium";
      return translatedSize;
    }
    else if (sizetoTranslate ==3){
      let translatedSize = "Large";
      return translatedSize;
    }
    return false;
  };

  let newOrder = document.createElement("li");
  newOrder.innerText =  "My Order";
  document.getElementById("showOrder").append(newOrder);
  
  let newOrderSize = document.createElement("li");
  newOrderSize.innerText =  "Size: " + sizeTranslate(sizetoTranslate);
  document.getElementById("showOrder").append(newOrderSize);

  let newOrderToppings = document.createElement("li");
  newOrderToppings.innerText =  "Toppings: " + myOrder.pizzas[1].toppings.toString(); 
  document.getElementById("showOrder").append(newOrderToppings);

  let newOrderQty = document.createElement("li");
  newOrderQty.innerText =  "Quantity: " + myOrder.pizzas[1].qty.toString();
  document.getElementById("showOrder").append(newOrderQty);

  let newOrderPrice = document.createElement("li");
  newOrderPrice.innerText =  "Price: $" + myOrder.pizzas[1].price.toString();
  document.getElementById("showOrder").append(newOrderPrice);
}


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
  showOrder(myOrder);
};
