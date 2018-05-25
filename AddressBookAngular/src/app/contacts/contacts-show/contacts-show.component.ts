import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit {

  public contact = new Contact();

  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap((params) => this.contactService.getById(params.id)),
    ).subscribe((contact: Contact) => {
      this.contact = contact;
    });
  }

}
