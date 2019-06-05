import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class PeopleService {
  apiUrl: string = environment.apiUrl;
  
  searchPeople(name: string): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.apiUrl}${name}`);
  }

  listPeople(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.apiUrl);
  }

  constructor(private httpClient: HttpClient) { }


}
