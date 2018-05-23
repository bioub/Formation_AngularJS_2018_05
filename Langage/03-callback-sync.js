var nbs = [2, 3, 4];

// Array.prototype.forEach (ES5, IE9+)
nbs
.filter((elt) => elt % 2 === 0) // => ES6
.map((elt) => elt ** 2) // ** ES7
.forEach(function cb(elt) {
  console.log(elt);
});

console.log('Fin');

// pile d'appels
// ^
// |
// |
// |
// |                         lg   lg
// |=> - => - =>   => - =>   cb - cb
// |filter       - map     - forEach - lg
// +-----------------------------------------> temps
//s:                         4    16   Fin
