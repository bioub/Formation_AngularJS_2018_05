import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactService } from './contact.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ContactService,
  ],
  declarations: [ContactsListComponent, ContactsShowComponent, ContactsAddComponent]
})
export class ContactsModule { }
