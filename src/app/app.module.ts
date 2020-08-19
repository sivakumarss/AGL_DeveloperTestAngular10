import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgpSortModule } from "ngp-sort-pipe";


import { AppComponent } from './app.component';
import { CatListComponent } from './cat-list/cat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgpSortModule,
    RouterModule.forRoot([
      {path: 'cat-list', component: CatListComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
