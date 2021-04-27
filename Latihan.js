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

/** UJIAN MAP
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

 const priceInJPY = 5000;

 // TODO
 const currency = new Map([
   ["USD", 14000],
   ["JPY", 131],
   ["SGD", 11000],
   ["MYR", 3500],
 ]);
 
 const priceInIDR = (priceInJPY * currency.get("JPY"));
 
 console.log(priceInIDR);


 /** UJIAN FUNCTION
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a * a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */


// TODO
function minimal(a,b) {
  if(a < b){return a;}
  else if (a > b){return b;}
  else {return b;}
}
console.log(minimal(3,1));
console.log(minimal(4,4));
console.log(minimal(5,8));

function power(a,b) {
  return( a ** b);
}

console.log(power(3,5));

/** UJIAN FUNCTIONAL PROGRAMNG - menggunakan filter() dan map()
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */

 const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

// TODO
let greatAuthors = books.filter((books) => books.sales > 1000000).map((book) => `${book.author} adalah penulis buku ${book.title} yang sangat hebat !`);

console.log(greatAuthors);