// function getTime() {
//   return new Date().toTimeString().slice(0,8);
// };
const getTime = () => new Date().toTimeString().slice(0,8)

/* ÉNONCÉ 📚 */

/*
 Créez un algorithme qui retourne l'heure affichée sous la forme : hh:mm:ss
 Utilisez l'objet date qui regorge d'informations pratiques lorsqu'on manipule le temps en JS.
*/


/* Tests à passer 🧪 */

console.log(getTime()); // 12:00:00 (par ex)




