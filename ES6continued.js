class Animal {
    constructor(firstname, lastname, age){
        this.firstName = firstname;
        this.lastName = lastname;
        this.age = age;
    }

    name(){
        return this.firstName + ' ' + this.lastName;
    }
}


class Human extends Animal {
    constructor(firstname, lastname, age){
        super(firstname, lastname, age);
        this.genus = 'homo';
    }

    speak(){
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

class Dog extends Animal {
    constructor(firstname, lastname, age){
        super(firstname, lastname, age);
        this.genus = 'canis';
    }

    speak () {
        return 'woof woof woof';
    }
}

document.getElementById('homework-2').addEventListener("click", homework2);

function homework2(){
    console.log('/===========Introduction to ES6 (Homework #2)===========/')
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