let person = {
    name: "Vibha",
    greet1: function() {
        const innerGreet = () => {
            console.log("name using arrow func",this.name)
        }
        innerGreet()
    },
    greet2: function () {
        console.log("name using normal func",this.name)
    }
}

function greetPerson (...message) {
    return `Welcome! ${this.name}.${message}`
}

console.log(greetPerson.call(person, " Good Evening!"))
console.log(greetPerson.apply(person, [" Good", "Evening!"]))

const greetNote = greetPerson.bind(person, " Good Evening!");
console.log(greetNote())

const arrowFunc = () => {
    console.log(this.name)
}
function nameFunc () {
    console.log(this.name)
}

arrowFunc()
nameFunc()
console.log(person.greet1())
console.log(person.greet2())