import angular from 'angular';
import UiRouterName from '@uirouter/angularjs';
import ContactListCtrlName from './contacts-list/contacts-list.controller';
import ContactAddComponentName from './contacts-add/contacts-add.component';
import ContactShowComponentName from './contacts-show/contacts-show.component';
import ContactServiceName from './contact.service';

const ContactsModule = angular.module('contacts/contacts.module', [
  UiRouterName,
  ContactListCtrlName,
  ContactAddComponentName,
  ContactShowComponentName,
  ContactServiceName,
]);

// TODO annoter
ContactsModule.config(function($locationProvider, $stateProvider) {

  // retire les #! de l'url (plus joli mais nécessite un config coté serveur
  // toutes les urls doivent renvoyer index.html)
  // $locationProvider.html5Mode(true);

  // $httpProvider.default.headers.authorization = '1234'

  // ancienne architecture (très présente)
  $stateProvider.state({
    name: 'contacts',
    url: '/contacts',
    controller: 'ContactListCtrl', // équivalent à ng-controller
    template: require('./contacts-list/contacts-list.template.html'),
    // template: templateContactsList,
    // si pas de builder (requete AJAX) :
    // templateUrl: 'app/contacts/contacts-list.template.html'
  });

  // nouvelle architecture (plus moderne et proche d'Angular 2+)
  $stateProvider.state({
    name: 'contacts.add',
    url: '/add',
    component: 'contactsAdd',
    // template: '<contacts-add></contacts-add>' // avant ui-router 1.0
  });

  $stateProvider.state({
    name: 'contacts.show',
    url: '/{id}',
    component: 'contactsShow',
  });

});

export default ContactsModule.name;
