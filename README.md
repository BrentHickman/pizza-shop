# _Pepper's Pizza_

#### By _**Brent Hickman**_

#### _Order a few pizzas from this site_

## Technologies Used

* HTML
* CSS
* Javascript


## Description

_ _

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Completed Tests
Test: "It will" Code: Expected output:

    Describe: Pizza()

    Test: "It will create a Pizza object that will hold an order number, an array of toppings, one size and one quantity"
    Code: new Pizza()
    Expected Output: {size:"",toppings[], qty:0};

    //second test

    Test: "It will add toppings to the 'toppings' array of the Pizza object."
    Code: Pizza.addTopping("cheese")
    Expected Output: Pizza {toppings:["cheese"]}


    Describe: Order()

    Test: "It will create an Order object that will hold an array of Pizzas"
    Code: new Order(orderNumber)
    Expected Output: {orderNumber:"",pizza[]};

    //second test
    Test: "It will add a new Pizza object to the pizzas property in the Order object"
    Code: Order.prototype.addPizza(order);
    Expected Output: Order{Pizzas{order}};




## Known Bugs

* Please inform deveopler if experiencing any bugs

## License

* [MIT](https://opensource.org/licenses/MIT)
