import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  public contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getList()
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
      });
  }

}
