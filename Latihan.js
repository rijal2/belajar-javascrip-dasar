/* Latihan membuat Destructing */

const profile = {
    firstName: "Muchamad",
    lastName: "Rijal",
    age: "27"
}

/* Code Destructing Object */
const {firstName, lastName, age};

/* Code Destructuring Assignment*/
let firstName: "Udin"
let age: "24"

({firstName,age} = profile);

console.log(firstName)
console.log(age)
console.log(isMale)