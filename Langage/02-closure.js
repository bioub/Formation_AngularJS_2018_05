function externe(msg) {
  // Portée de Closure
  // 2 conditions:
  // 1 - 2 fonctions imbriqués
  // 2 - la fonction interne soit appelée en dehors (parce retournée, mise dans un tableau/objet, callback async)
  function interne() {
    console.log(msg);
  }

  return interne;
}

const helloFct = externe('Hello');

helloFct();

// pile d'appels
// ^
// |
// |
// |
// |
// |
// |externe - interne/helloFct
// +-----------------------------------------> temps


// Sans closure : 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

/// i === 3s

// Avec closure : 0 1 2
for (var i = 0; i < 3; i++) {

 setTimeout(externe(i), 1000);
}
