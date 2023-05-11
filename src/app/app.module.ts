import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteslistComponent } from './pages/noteslist/noteslist.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotecardComponent } from './notecard/notecard.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteslistComponent,
    MainLayoutComponent,
    NotecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
