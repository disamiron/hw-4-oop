///////////МЕНЮ//////////
//бурегры
function Hamburger(size, stuffing) {
  this.name = size.name + ' hamburger with ' + stuffing.name;
  this.price = size.price + stuffing.price;
  this.calories = size.calories + stuffing.calories;
  this.size = size.name;
  this.stuffing = stuffing.name;
};

Hamburger.SIZE_SMALL = {name: "Small", price: 50, calories: 20};
Hamburger.SIZE_LARGE = {name: "Big", price: 100, calories: 40};
Hamburger.STUFFING_CHEESE = {name: "cheese", price: 10, calories: 20};
Hamburger.STUFFING_SALAD = {name: "salad", price: 20, calories: 5};
Hamburger.STUFFING_POTATO = {name: "potato", price: 15, calories: 10};

//меню бургеров
var burgerSmCheese = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
var burgerSmSalad = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);
var burgerSmPotato = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATO);
var burgerBiCheese = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
var burgerBiSalad = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD);
var burgerBiPotato = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_POTATO);

////////////////////////////
//салаты
function Salad (salad) {
  this.name = "Salad " + salad.name
  this.price = salad.price;
  this.calories = salad.calories;
}

Salad.CESAR = {name: "Cesar", price: 100, calories: 20};
Salad.RUSSIANSALAD = {name: "Russian", price: 50, calories: 80};
//меню салатов
var saladCesar = new Salad(Salad.CESAR);
var saladRussianSalad = new Salad(Salad.RUSSIANSALAD);

////////////////////////////
//напитки
function Drink (drink) {
  this.name = drink.name
  this.price = drink.price;
  this.calories = drink.calories;
}

Drink.COLA = {name: "Cola", price: 50, calories: 40};
Drink.COFFEE = {name: "Coffee", price: 80, calories: 20};
//меню напитков
var drinkCola = new Drink(Drink.COLA);
var drinkCoffee = new Drink(Drink.COFFEE);



////////////////////////////
//заказ
function Order (...items) {
  this.items = items;
}

//новый заказ
var order = new Order (burgerSmCheese, burgerBiSalad, saladRussianSalad, drinkCola);

//узнать цену заказа
function getOrderPrice (order) {
  var price = 0;
  for (i=0;i<order.items.length;i++) {
    price += order.items[i].price;
  }
  console.log("Your order cost: " + price + " tugrikov.");
}
//узнать калории заказа
function getOrderCalories (order) {
  var calories = 0;
  for (i=0;i<order.items.length;i++) {
    calories += order.items[i].calories;
  }
  console.log("Your order contains: " + calories + " calories.");
}

//узнать заказ
function getOrder (order) {
  if (order.items.length == 0) {
    console.log("Your order is empty")
  } else if (order.items.length > 0) {
  var orderText = "In your order: ";
  for (var i=0;i<order.items.length;i++) {
    if (i !== order.items.length - 1) {
      orderText += order.items[i].name + ", "
    } else {
      orderText += order.items[i].name + "."
    }
  }
  console.log(orderText);
  }
}

//убрать позицию из заказа




getOrderPrice(order);
getOrderCalories(order);
getOrder(order);
