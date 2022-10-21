/* 1 */
const lista = [2,4,5,6,7,8,5,23,32,33]
const result = lista.filter(mayor);
function mayor(num){
  if(num <= 32 == 0)
  return mayor
}

console.log(result);

/* 2 */



/* 3 */



/* 4 */
const numeros  = [1, 7, 2, 3, 4, 5, 5,7];
let dupli = [];
const arrayIn = [...numeros].sort();

for (let i = 0; i < arrayIn.length; i++) {
  if (arrayIn[i + 1] === arrayIn[i]) {
    dupli.push(arrayIn[i]);
  }
}
    console.log(dupli); // [5, 7]

/* 5 */
