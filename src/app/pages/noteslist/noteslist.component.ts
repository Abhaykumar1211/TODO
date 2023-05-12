import { Component } from '@angular/core';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.scss']
})
export class NoteslistComponent {

notes: Note[] =new Array<Note>();

constructor(private notesService: NotesService){

}

ngOnInit(){
  // we want to retrieve all notes from Notes Service

 this.notes = this.notesService.getAll();
}

}
