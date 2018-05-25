import angular from 'angular';

const module = angular.module('contacts/contacts-list/contacts-list.controller', []);

class ContactListCtrl {
  constructor(contactService, $scope) {
    $scope.contacts = [];

    contactService.getList()
          .then((res) => {
            $scope.contacts = res.data;
          });
  }
}

// annoter les services (permet de minifier le code)
// version 1 :
// ContactListCtrl.$inject = ['contactService', '$scope'];
// module.controller('ContactListCtrl', ContactListCtrl);

// Version 2 :
module.controller('ContactListCtrl', ['contactService', '$scope', ContactListCtrl]);

export default module.name;
