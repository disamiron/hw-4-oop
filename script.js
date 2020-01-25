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
  this.payment = false;
}

//новый заказ
var order = new Order (burgerSmCheese, burgerBiSalad, saladRussianSalad, drinkCola);

//добавить позицию в заказ
Order.prototype.addPosition = function(item) {
  if (!this.payment) {
    this.items = this.items.concat(item);
  } else {
    console.log("You cannot add a new item to a paid order")
  }
}

//удалить позицию
Order.prototype.removePosition = function(item) {
  if (!this.payment) {
    if ((this.items.indexOf(item)) == -1) {
    console.log("This item is not in the order")
  } else {
    var i = this.items.indexOf(item);
    this.items.splice(i, 1);
  }
  } else {
    console.log("You cannot remove item to a paid order")
  }
}

//оплатить заказ
Order.prototype.payForTheOrder = function() {
  if (confirm(this.getOrderPrice() + " tugrikov from you")) {
    console.log("Your order has been paid");
    this.payment = true;
  } else {
    console.log("You can still change your order");
  }
}

//узнать цену заказа
Order.prototype.getOrderPrice = function () {
  var price = 0;
  for (i=0;i<this.items.length;i++) {
    price += this.items[i].price;
  }
  console.log("Your order cost: " + price + " tugrikov.");
  return price;
}
//узнать калории заказа
Order.prototype.getOrderCalories = function () {
  var calories = 0;
  for (i=0;i<this.items.length;i++) {
    calories += this.items[i].calories;
  }
  console.log("Your order contains: " + calories + " calories.");
}

//узнать заказ
Order.prototype.getOrder = function() {
  if (this.items.length == 0) {
    console.log("Your order is empty")
  } else if (this.items.length > 0) {
  var orderText = "In your order: ";
  for (var i=0;i<this.items.length;i++) {
    if (i !== this.items.length - 1) {
      orderText += this.items[i].name + ", "
    } else {
      orderText += this.items[i].name + "."
    }
  }
  console.log(orderText);
  }
}





console.log("Подробности заказа");
order.getOrder();
order.getOrderPrice();
order.getOrderCalories();

console.log("Добавляем новую позицию");
order.addPosition(burgerBiPotato);
order.getOrder();
order.getOrderPrice();

console.log("Удаляем позицию");
order.removePosition(burgerBiSalad);
order.getOrder();
order.getOrderPrice();

console.log("Оплачиваем заказ (При подтверждении, последующие добавления и удаления не будут работать. При отмене можно сработает добавление и удаление)");
order.payForTheOrder()

console.log("Пробуем добавить позицию в оплаченный заказ");
order.addPosition(burgerBiPotato);
console.log("Пробуем удалить позицию из оплаченного заказа");
order.removePosition(drinkCola);
order.getOrder();
