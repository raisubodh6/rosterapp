import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-display-people',
  templateUrl: './display-people.component.html',
  styleUrls: ['./display-people.component.css']
})
export class DisplayPeopleComponent implements OnInit {
  @Input() person: Person;
  displayName: string;
  constructor() { }

  ngOnInit() {
    this.displayName = `${this.person.firstname} ${this.person.lastname}`;
  }
}
