import angular from 'angular';
import template from './contacts-show.template.html';

const ContactsShowComponentModule = angular.module('contacts/contacts-show/contacts-show.component', []);

class ContactsShowComponent {
  constructor(contactService, $state) {
    contactService.getById($state.params.id)
      .then((res) => {
        this.contact = res.data;
      });
  }
}

ContactsShowComponentModule.component('contactsShow', {
  template: template,
  controller: ContactsShowComponent,
});

export default ContactsShowComponentModule.name;
