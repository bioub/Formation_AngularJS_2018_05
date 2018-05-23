// (function (exports, require, module, __filename, __dirname) {
/**
 * Additionne 2 nombres
 * @param {number} a Le 1er nombre
 * @param {number} b Le 2e nombre
 * @returns {number} La somme
 */
function sum(a, b) {
  return Number(a) + Number(b);
}

for (var i = 0; i < 3; i++) {
  console.log(sum(i, i));
}
// });
