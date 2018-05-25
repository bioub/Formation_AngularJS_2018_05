import angular from 'angular';
import template from './contacts-show.template.html';

const ContactsShowComponentModule = angular.module('contacts/contacts-show/contacts-show.component', []);

class ContactsShowComponent {
  constructor(contactService, $state) {
    this.contactService = contactService;
    this.$state = $state;
    contactService.getById($state.params.id)
      .then((res) => {
        this.contact = res.data;
      });
  }
  delete() {
    this.contactService.remove(this.contact.id)
      .then(() => {
        this.$state.go('^', {}, {reload: true});
      });
  }
}

ContactsShowComponentModule.component('contactsShow', {
  template: template,
  controller: ContactsShowComponent,
});

export default ContactsShowComponentModule.name;
