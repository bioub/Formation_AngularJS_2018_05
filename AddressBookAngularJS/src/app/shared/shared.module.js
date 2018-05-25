import angular from 'angular';
import HorlogeComponentModuleName from './horloge/horloge.component';

const SharedModule = angular.module('shared/shared.module', [
  HorlogeComponentModuleName
]);

export default SharedModule.name;
