import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteslistComponent } from './pages/noteslist/noteslist.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotedetailsComponent } from './pages/notedetails/notedetails.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children:[
    { path:'', component: NoteslistComponent},
    { path:'new', component: NotedetailsComponent},
    { path:':id', component: NotedetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
