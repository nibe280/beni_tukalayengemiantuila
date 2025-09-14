// non sécurisée
// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// sécurisé
function getRandomNumber(min, max) {

  let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0]

  // 0 à 4294967295
  randomNumber = randomNumber / 4294967296;

  return Math.floor(randomNumber * (max - min + 1)) + min;
}


/* ÉNONCÉ 📚 */


/* 
  Créez un algorithme qui renvoie un nombre aléatoire dans un intervalle donné.
  Il existe deux manières de faire, une sécurisée et une non-sécurisée.
*/


/* Tests à passer 🧪 */

console.log(getRandomNumber(1, 10));  // un nombre entre 1 et 10 inclu
console.log(getRandomNumber(10, 15)); // un nombre entre 10 et 15 inclu
console.log(getRandomNumber(90, 95)); // un nombre entre 90 et 95 inclu



