import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeopleService } from '../../services/people.service';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-create-customer',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.css']
})
export class SearchPeopleComponent implements OnInit {
  firstName: any;
  lastName: any;
  people: Person[];

  constructor(private _peopleService: PeopleService) { }

  ngOnInit() {
  }

  searchPeople(personForm: NgForm): void {
    this._peopleService.searchPeople(this.firstName || this.lastName).subscribe(people => {
      this.people = people;
    });
  }
} 
