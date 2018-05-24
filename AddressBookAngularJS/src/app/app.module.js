import angular from 'angular';
import SharedModuleName from './shared/shared.module';
import ContactsModuleName from './contacts/contacts.module';

const AppModule = angular.module('app.module', [
  SharedModuleName,
  ContactsModuleName,

]);


export default AppModule.name;
