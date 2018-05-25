import angular from 'angular';
import template from './contacts-add.template.html';

const ContactsAddComponentModule = angular.module('contacts/contacts-add/contacts-add.component', []);

class ContactsAddComponent {
  constructor() {

  }
}

ContactsAddComponentModule.component('contactsAdd', {
  template: template,
  controller: ContactsAddComponent,
});

export default ContactsAddComponentModule.name;
