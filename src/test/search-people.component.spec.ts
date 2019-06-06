import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { SearchPeopleComponent } from '../app/people/searchPeople/search-people.component';
import { PeopleService } from 'src/app/services/people.service';
import { DisplayPeopleComponent } from 'src/app/people/display-people.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('SearchPeopleComponent', () => {
  let comp: SearchPeopleComponent ;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchPeopleComponent,
        DisplayPeopleComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [PeopleService]
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(SearchPeopleComponent);
    const app = fixture.debugElement.componentInstance;
    debugger;
    expect(app).toBeTruthy();
  }));
  
  it(`should search and return a person'`, async(() => {
    const fixture = TestBed.createComponent(SearchPeopleComponent);
    comp = fixture.componentInstance;
    const service = TestBed.get(PeopleService);
    service.searchPeople = () => {
      return Observable.of({});
    };
    comp.searchPeople();
    expect(service.searchPeople.toHaveBeenCalled);
    expect(comp.people).toBeDefined();
  }));

});