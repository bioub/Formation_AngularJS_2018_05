import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getList() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  getById(id) {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users/' + id);
  }
  create(contact) {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/users', contact);
  }
}
