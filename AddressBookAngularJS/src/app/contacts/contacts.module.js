import angular from 'angular';
import UiRouterName from '@uirouter/angularjs';
import ContactListCtrlName from './contacts-list/contacts-list.controller';
// import templateContactsList from './contacts-list/contacts-list.template.html';

const ContactsModule = angular.module('contacts/contacts.module', [
  UiRouterName,
  ContactListCtrlName,
]);

ContactsModule.config(function($stateProvider) {

  // ancienne architecture (très présente)
  $stateProvider.state({
    name: 'contacts-list',
    url: '/contacts',
    controller: 'ContactListCtrl', // équivalent à ng-controller
    template: require('./contacts-list/contacts-list.template.html'),
    // template: templateContactsList,
    // si pas de builder (requete AJAX) :
    // templateUrl: 'app/contacts/contacts-list.template.html'
  });

  // nouvelle architecture (plus moderne et proche d'Angular 2+)
  $stateProvider.state({
    name: 'contacts-add',
    url: '/contacts/add',
    template: '<h2>Ajouter un contact</h2>',
  });

});

export default ContactsModule.name;
