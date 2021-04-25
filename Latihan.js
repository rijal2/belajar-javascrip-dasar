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

/** UJIAN OBJECT
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai boolean apa pun.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */


// TODO
const restaurant = {
    name: "Cepat Saji",
    city: "Bojonegoro",
    "favorite drink": "Teh",
    "favorite food": "NasKun",
    isVegan: true,
  }
  const name = restaurant['name'];
  const favoriteDrink = restaurant['favorite drink'];
  

/**  UJIAN ARRAY
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// TODO

const evenNumber = [];
for (let i=1; i <= 100 ;i++) {
  if (i % 2 == 0) {
    evenNumber.push(i)
  }
}

console.log(evenNumber)
  