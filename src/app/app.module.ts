import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPeopleComponent } from './people/listPeople/list-people.component';
import { SearchPeopleComponent } from './people/searchPeople/search-people.component';

import { PeopleService } from './services/people.service';
import { DisplayPeopleComponent } from './people/display-people.component'

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    SearchPeopleComponent,
    DisplayPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
