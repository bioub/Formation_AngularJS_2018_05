// Mauvaise pratique de modifier les objets du langages

// 1 - object créé une seule fois
// - ou très simple à créer
// - sans méthodes
// => object literal

var coords = {
  x: 10,
  y: 20,
};

const json = JSON.stringify(coords); // ES5
console.log(json); // {"x":10,"y":20}

// ... réseau ...

const obj = JSON.parse(json);
console.log('x', obj.x);

coords.z = 30; // ajoute ou modifie
delete coords.z; // supprime

for (var key in coords) {
  console.log(key); // x y
  console.log(coords[key]); // 10 20
}

// 2 - object créé plusieurs fois
// - plutot compliquer à créer
// - sans méthodes
// => factory function

function coords3dFactory(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;
  return {
    x: x,
    y: y,
    z: z,
    getX: function() { return this.x },
  };
}

const coords3dFactoryES6 = (x = 0, y = 0, z = 0) => ({x, y, z});

const coords3dA = coords3dFactory(10);
const coords3dB = coords3dFactory(20, 30);
console.log(coords3dA.getX === coords3dB.getX); // false

// 3 - object créé plusieurs fois
// - plutot compliquer à créer
// - avec méthodes
// - avec un type (instanceof)
// => constructor function

function Contact(prenom) {
  this.prenom = prenom;
  // si prop privée, simplement la préfixer par
  // this._prenom = prenom; // Node.js
  // this.$$prenom = prenom; // AngularJS
}

// méthode statique
Contact.getClass = function() {
  return 'Contact';
};

// méthode de l'objet
Contact.prototype.hello = function() {
  return 'Bonjour je suis ' + this.prenom;
};

var romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain.prenom); // 'Romain'
console.log(romain instanceof Contact); // true
console.log(Contact.getClass());
console.log(romain.hello());
console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false


var jean = new Contact('Jean');

console.log(romain.hello === jean.hello); // true
