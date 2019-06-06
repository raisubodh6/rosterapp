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
  firstName: string;
  lastName: string;
  people: Person[];

  constructor(private _peopleService: PeopleService) { }

  ngOnInit() {
  }

  searchPeople(): void {
    const person = new Person(
      null,
      this.firstName,
      this.lastName
    );
   
    this._peopleService.searchPeople(person).subscribe(people => {
      this.people = people;
    });
  }
} 
