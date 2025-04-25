let userName = "Hi, I'm Vitor!";
let age = "24";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
        title: "Developer",
        place: "New York",
        salary: 50000,
};
let totalAdultYears; // Variável criada

function calculateAdultYears(userAge) { // variável criada dentro da função
    let result;
    result = userAge - 18;
    return userAge - 18;
}

totalAdultYears = calculateAdultYears(age); // Chamar a função para armazenar resultado na variável
console.log(totalAdultYears);

age = 45; // setting new value to the variable
totalAdultYears = calculateAdultYears(age); // invoking the function again

console.log(totalAdultYears);

let person = {
    name: "Max", // Property
    greet() {
        console.log("Hello!")
    }
}

person.greet()

