import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteslistComponent } from './pages/noteslist/noteslist.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotecardComponent } from './notecard/notecard.component';
import { NotedetailsComponent } from './pages/notedetails/notedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteslistComponent,
    MainLayoutComponent,
    NotecardComponent,
    NotedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
