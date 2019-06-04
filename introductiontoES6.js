function Animal(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
};
Animal.prototype.name = function() {
    return this.firstName + " " + this.lastName
};

function Human(first, last, age){
    Animal.apply(this, arguments);
    this.genus = "homo";
};
Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;
Human.prototype.speak = function(){
    return `My name is ${this.name()}`;
};

function Dog(first, last, age){
    Animal.apply(this, arguments);
    this.genus = "canis";
    this.speak = () => {return "woof woof woof"};
};
Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
Dog.prototype.speak = function(){
    return "woof woof woof";
};

document.getElementById('homework-1').addEventListener("click", homework1);

function homework1(){
    console.log('/===========Introduction to ES6 (Homework #1)===========/')
    var dog = new Dog('bob', 'smith', 5);
    console.log(dog);
    console.log(dog.speak());
    console.log(dog.name());
    console.log(dog.genus);
    console.log(dog.age);
    var woman = new Human("eve", "goldberg", 22);
    console.log(woman);
    console.log(woman.speak());
    console.log(woman.name());
    console.log(woman.genus);
    console.log(woman.age);
};