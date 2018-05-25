import angular from 'angular';
import template from './contacts-add.template.html';

const ContactsAddComponentModule = angular.module('contacts/contacts-add/contacts-add.component', []);

class ContactsAddComponent {
  constructor(contactService, $state) {
    this.contactService = contactService;
    this.$state = $state;
  }
  ajouter() {
    // this ici === $ctrl dans le template
    this.contactService.create(this.contact)
      .then((res) => {
        this.$state.go('^.show', {id: res.data.id}, {reload: true});
      });
  }
}

ContactsAddComponentModule.component('contactsAdd', {
  template: template,
  controller: ContactsAddComponent,
});

export default ContactsAddComponentModule.name;
