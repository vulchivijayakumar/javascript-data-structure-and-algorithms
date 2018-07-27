/*
  All about JavaScript Classes
  1. Define Class
  2. Using Class
  3. Creating Constructor
  4. Creating Constructor solution
*/

// what it is, building function
// what it has, floors 
// what it does, counts/prints the floors

// Building constructor function may be converted to a class declaration.
function Building (floors) {
  // constructure properties, this keyword is instance of
  this.what = 'Building';
  this.floors = floors;
};

// Methods (for Building constructor)
Building.prototype.countFloors = function () {
  console.log('I have ', this.floors, 'floors.');
}

// myHouse, myOffice is instance here
let myHouse = new Building(2);
let myOffice = new Building(12); 
myHouse.countFloors();
myOffice.countFloors();


example:

let Food = function (item, count, price) {
  this.itemName = item;
  this.itemCount = count;
  this.itemPrice = price;
  this.total;
}

Food.prototype.totalAmount = function () {
  this.total = this.itemCount * this.itemPrice;
  console.log('Item Name: ' + this.itemName + ', and No of pieces is: ' + this.itemCount + ' Each piece price is: ' + this.itemPrice + '. Total is: ' + this.total);
}

let myFood = new Food('Chicken', 20, 90);
myFood.totalAmount();


