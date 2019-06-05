import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPeopleComponent } from './people/listPeople/list-people.component';
import { SearchPeopleComponent } from './people/searchPeople/search-people.component';

const routes: Routes = [
  { path: 'list', component: ListPeopleComponent},
  { path: 'search', component: SearchPeopleComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
