import angular from 'angular';

class ContactService {
  constructor($http) {
    this.$http = $http;
    this.reload = 0;
  }
  getList() {
    return this.$http.get('http://localhost:3000/users');
  }
  getById(id) {
    return this.$http.get('http://localhost:3000/users/' + id);
  }
  remove(id) {
    return this.$http.delete('http://localhost:3000/users/' + id);
  }
  create(contact) {
    return this.$http.post('http://localhost:3000/users', contact);
  }
}
ContactService.$inject = ['$http'];

const module = angular.module('contacts/contact.service', []);
// si factory function
// module.factory('contactService', function() {});
// si constructor function (ou class en ES6)
module.service('contactService', ContactService);
export default module.name;
