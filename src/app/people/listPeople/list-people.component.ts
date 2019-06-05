import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model'
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  people: Person[];  
  constructor(private _peopleService: PeopleService) { }

  ngOnInit() {
    this._peopleService.listPeople().subscribe(people => {
      this.people = people;
    });
  }

}
