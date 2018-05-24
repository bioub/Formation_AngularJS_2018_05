import angular from 'angular';
import template from './horloge.template.html';

const HorlogeComponentModule = angular.module('shared/horloge/horloge.component', []);

class HorlogeComponent {
  constructor($interval) {
    this.now = new Date(); // dans le template this === $ctrl
    $interval(() => {
      this.now = new Date();
    }, 1000);
  }
}

HorlogeComponentModule.component('myHorloge', {
  template: template,
  controller: HorlogeComponent,
});

export default HorlogeComponentModule.name;
