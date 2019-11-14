/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.stomach= [];
  this.name=name,
  this.age=age
};

  Person.prototype.eat = function(someFood){
    if (this.stomach.length < 10){
      this.stomach.push(someFood);
    };
    
    }
  
Person.prototype.poop = function(stomach){
this.stomach = [];

}
Person.prototype.toString= function(name, age){
return `${this.name}, ${this.age}`;
}




/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.milesPerGallon=milesPerGallon,
  this.model=model,
  this.tank=0,
  this.odometer=0

}

Car.prototype.fill= function(gallons){
this.tank += gallons;
}

Car.prototype.drive = function(){
return `I ran out of fuel at ${this.odometer} miles!`;
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
this.name= name,
this.age=age,
this.favoriteToy=favoriteToy
}
Baby.prototype= Object.create(Person.prototype);

Baby.prototype.play= function(){
  return `Playing with ${this.favoriteToy}`;


}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:

  1. Window/global binding. - the value of 'this.' will be entire window object because called on the global scope.


  2. Implicit binding. - the .this keyword will point to the object that is directly before the dot when the function is invoked. Only applies to objects with methods.
  
  
  3. Explicit binding. -using apply,call, bind to explicitly change 'this.' refers to. Call immediately invokes function & passes arguments 1 by 1. Bind passes arguments 1 by 1 but doesnt immediately invoke function. will return brand new function that can be stored for later. Apply will immediately invoke function & pass as an array.




  4. New binding. -uses 'new' keyword to create context for a new object and 'this.' will point to that new object. Using constructor function we can create as a template for that object.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
