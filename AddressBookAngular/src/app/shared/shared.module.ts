import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorlogeComponent } from './horloge/horloge.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HorlogeComponent],
  exports: [
    HorlogeComponent,
  ]
})
export class SharedModule { }
