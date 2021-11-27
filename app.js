var firstName = "Elijah"
const states = 50
var sum = 5 + 4
// This is a JS file
function sayHello() {
    alert("Hello World!")
}
sayHello()
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}
checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)
let vegetables = ['Broccoli', 'Carrots', 'Squash']
for (let index = 0; index < vegetables.length; index++) {
    console.log(vegetables[index])

}
let pet = {
    name: "Beans", breed: "cat"
}
console.log(pet.name, pet.breed)//dot notation
let people = [
    {
        name: "Josh", age: 27
    },
    {
        name:"Elijah", age: 28
    },
    {
        name:"Benji", age: 17
    },
    {
        name:"Amy", age: 18
    },
    {
        name:"Rita", age: 75
    }
]
for (let index = 0; index < people.length; index++) {
    console.log(people[index].name, people[index].age)
    
}
function getLength(word){
    return word.length
}
let fartLength = getLength("fart")
if (fartLength%2==0) {
    console.log("The world is nice and even!")
} else {
    console.log("The world is an odd place!")
}

