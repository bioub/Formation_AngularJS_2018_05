var entierEntre0et1000 = Math.floor(Math.random() * 1001);

setTimeout(function cb1() {
  console.log(1);
}, 1000);

setTimeout(function cb2() {
  console.log(2);
}, 500);

setTimeout(function cb3() {
  console.log(3);
}, 500);

/*
setTimeout(function cb3() {
  console.log(3);
}, entierEntre0et1000);
*/

console.log('Fin');

// pile d'appels
// ^
// |
// |
// |    idle    lg    lg   idle   lg
// |lg ...⟳... cb2 - cb3 ...⟳... cb1
// +------------500ms-----------------------------> temps
//s:Fin         2     3            1

// file d'attente (500ms) : cb2 - cb3
// file d'attente (501ms) : cb3
// file d'attente (503ms) :
// file d'attente (1000ms) : cb1
// file d'attente (1001ms) :
