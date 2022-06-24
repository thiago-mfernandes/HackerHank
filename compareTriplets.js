/* 
Comparar a posição do índice de dois array's:
Alice: a[5,6,7];
Bob: a[3,6,10];

Se a[i] > b[i], Alice ganha um ponto;
Se a[i] < b[i], Bob ganha um ponto;
Se a[i] >= b[i], ninguem ganha um ponto;

Retorne um array [1,1] onde a posição 0 corresponde a pontuação de Alice e a posição 1 corresponde a pontuação de Bob.

*/

const a = [5, 6, 7];
const b = [3, 6, 10];
const result = [];

function compareTriplets(a, b) {
  // Write your code here
  for (i = 0; i < 3; i++) {
    if (a[i] != b[i]) {
      a[i] > b[i] ? (result.push[0] += 1) : (result.push[1] += 1);
    }
  }
}
console.log(result);
