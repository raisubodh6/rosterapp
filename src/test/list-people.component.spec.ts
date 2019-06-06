import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { ListPeopleComponent } from '../app/people/listPeople/list-people.component';
import { PeopleService } from 'src/app/services/people.service';
import { DisplayPeopleComponent } from 'src/app/people/display-people.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('ListPeopleComponent', () => {
  let comp: ListPeopleComponent ;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListPeopleComponent,
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
    const fixture = TestBed.createComponent(ListPeopleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
  it(`should return people'`, async(() => {
    const fixture = TestBed.createComponent(ListPeopleComponent);
    comp = fixture.componentInstance;
    const service = TestBed.get(PeopleService);
    service.listPeople = () => {
      return Observable.of({});
    };
    comp.ngOnInit();
    expect(service.listPeople.toHaveBeenCalled);
    expect(comp.people).toBeDefined();
  }));

});