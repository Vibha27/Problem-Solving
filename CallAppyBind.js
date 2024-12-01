let person = {
    name: "Vibha"
}

function greetPerson (...message) {
    return `Welcome! ${this.name}.${message}`
}

console.log(greetPerson.call(person, " Good Evening!"))
console.log(greetPerson.apply(person, [" Good", "Evening!"]))

const greetNote = greetPerson.bind(person, " Good Evening!");
console.log(greetNote())