import angular from 'angular';
import UiRouterName from '@uirouter/angularjs';
import ContactListCtrlName from './contacts-list/contacts-list.controller';
import ContactAddComponentName from './contacts-add/contacts-add.component';
// import templateContactsList from './contacts-list/contacts-list.template.html';

const ContactsModule = angular.module('contacts/contacts.module', [
  UiRouterName,
  ContactListCtrlName,
  ContactAddComponentName,
]);

// TODO annoter
ContactsModule.config(function($httpProvider, $stateProvider) {

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

});

export default ContactsModule.name;
