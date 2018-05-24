import angular from 'angular';

const module = angular.module('contacts/contacts-list/contacts-list.controller', []);

class ContactListCtrl {
  constructor($http, $scope) {
    $scope.contacts = [];

    $http.get('https://jsonplaceholder.typicode.com/users')
          .then((res) => {
            $scope.contacts = res.data;
          });
  }
}

// annoter les services (permet de minifier le code)
// version 1 :
// ContactListCtrl.$inject = ['$http', '$scope'];
// module.controller('ContactListCtrl', ContactListCtrl);

// Version 2 :
module.controller('ContactListCtrl', ['$http', '$scope', ContactListCtrl]);

export default module.name;
