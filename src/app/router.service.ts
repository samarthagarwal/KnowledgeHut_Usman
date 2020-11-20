import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  private person: any;

  setPerson(p) {
    this.person = p;
  }

  getPerson() {
    return this.person;
  }
}
